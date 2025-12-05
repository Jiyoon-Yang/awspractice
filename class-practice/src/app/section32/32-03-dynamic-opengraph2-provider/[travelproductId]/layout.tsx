// "use client" => 이걸 지우면 서버 컴포넌트가 되고, 서버에서 조회하고 HTML 그려서 완성형 내려보내줌 => SSR

import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const FETCH_TRAVELPRODUCT = gql`
  query fetchTravelproduct($travelproductId: ID!) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default async function OpengraphProviderLayout({ children, params }) {
  // const params = useParams();
  // const { data } = useQuery(FETCH_TRAVELPRODUCT, {
  //   variables: { travelproductId: params.travelproductId },
  // });

  const graphqlClient = new GraphQLClient(
    "https://main-practice.codebootcamp.co.kr/graphql"
  );
  const data = await graphqlClient.request(FETCH_TRAVELPRODUCT, {
    travelproductId: params.travelproductId,
  });

  return (
    <>
      <meta property="og:title" content={data?.fetchTravelproduct.name} />
      <meta property="og:description" content={data?.fetchTravelproduct?.remarks} />
      <meta property="og:image" content={data?.fetchTravelproduct?.images?.[0]} />

      <>{children}</>
    </>
  );
}
