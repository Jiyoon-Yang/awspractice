/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  # 변수의 타입 적는곳\n  mutation createBoard(\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    createBoard(writer: $mywritter, title: $mytitle, contents: $mycontent) {\n      number\n      message\n    }\n  }\n": typeof types.CreateBoardDocument,
    "\n  # 변수의 타입 적는곳\n  mutation upadateBoard(\n    $mynumber: Int\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    updateBoard(\n      number: $mynumber\n      writer: $mywritter\n      title: $mytitle\n      contents: $mycontent\n    ) {\n      number\n      message\n    }\n  }\n": typeof types.UpadateBoardDocument,
    "\n  query fetchBoard($qqq: Int) {\n    fetchBoard(number: $qqq) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": typeof types.FetchBoardDocument,
    "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n": typeof types.CreateProductDocument,
    "\n  mutation deleteBoard($mynumber: Int) {\n    deleteBoard(number: $mynumber) {\n      message\n    }\n  }\n": typeof types.DeleteBoardDocument,
};
const documents: Documents = {
    "\n  # 변수의 타입 적는곳\n  mutation createBoard(\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    createBoard(writer: $mywritter, title: $mytitle, contents: $mycontent) {\n      number\n      message\n    }\n  }\n": types.CreateBoardDocument,
    "\n  # 변수의 타입 적는곳\n  mutation upadateBoard(\n    $mynumber: Int\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    updateBoard(\n      number: $mynumber\n      writer: $mywritter\n      title: $mytitle\n      contents: $mycontent\n    ) {\n      number\n      message\n    }\n  }\n": types.UpadateBoardDocument,
    "\n  query fetchBoard($qqq: Int) {\n    fetchBoard(number: $qqq) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardDocument,
    "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation deleteBoard($mynumber: Int) {\n    deleteBoard(number: $mynumber) {\n      message\n    }\n  }\n": types.DeleteBoardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  # 변수의 타입 적는곳\n  mutation createBoard(\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    createBoard(writer: $mywritter, title: $mytitle, contents: $mycontent) {\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  # 변수의 타입 적는곳\n  mutation createBoard(\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    createBoard(writer: $mywritter, title: $mytitle, contents: $mycontent) {\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  # 변수의 타입 적는곳\n  mutation upadateBoard(\n    $mynumber: Int\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    updateBoard(\n      number: $mynumber\n      writer: $mywritter\n      title: $mytitle\n      contents: $mycontent\n    ) {\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  # 변수의 타입 적는곳\n  mutation upadateBoard(\n    $mynumber: Int\n    $mywritter: String\n    $mytitle: String\n    $mycontent: String\n  ) {\n    # 실제 우리가 전달할 변수 적는 곳\n    updateBoard(\n      number: $mynumber\n      writer: $mywritter\n      title: $mytitle\n      contents: $mycontent\n    ) {\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($qqq: Int) {\n    fetchBoard(number: $qqq) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($qqq: Int) {\n    fetchBoard(number: $qqq) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoard($mynumber: Int) {\n    deleteBoard(number: $mynumber) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBoard($mynumber: Int) {\n    deleteBoard(number: $mynumber) {\n      message\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;