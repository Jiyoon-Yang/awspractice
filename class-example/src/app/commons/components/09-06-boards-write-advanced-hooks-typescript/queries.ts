import { gql } from "@apollo/client";

export const myGraphqlSetting = gql`
  # 변수의 타입 적는곳
  mutation createBoard(
    $mywritter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 우리가 전달할 변수 적는 곳
    createBoard(writer: $mywritter, title: $mytitle, contents: $mycontent) {
      number
      message
    }
  }
`;

export const myGraphqlEditSetting = gql`
  # 변수의 타입 적는곳
  mutation upadateBoard(
    $mynumber: Int
    $mywritter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 우리가 전달할 변수 적는 곳
    updateBoard(
      number: $mynumber
      writer: $mywritter
      title: $mytitle
      contents: $mycontent
    ) {
      number
      message
    }
  }
`;
export const FETCH_BOARD = gql`
  query fetchBoard($qqq: Int) {
    fetchBoard(number: $qqq) {
      number
      writer
      title
      contents
    }
  }
`;
