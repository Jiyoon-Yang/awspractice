"use client";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "철수",
        createProductInput: {
          name: "기계식 비코드",
          detail: "정말 좋은 키보드~",
          price: 49900,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </>
  );
}
