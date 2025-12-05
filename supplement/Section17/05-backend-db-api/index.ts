import { DataSource } from "typeorm";
import { Board } from "./Board.postgress";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// API-DOCS 만들기
const 타입 = `#graphql

  type MyBoard {
    number: Int
    writer: String
    title: String
    content: String
  }

  type Query {
    fetchBoards: [MyBoard] 
  }
  type Mutation {
    createBoard(writer: String, title:String, content: String): String
  }

`;
// API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },
  },
  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        writer: args.writer,
        title: args.title,
        content: args.content,
      });
      return "등록 성공!";
    },
  },
};

const 서버설정 = new ApolloServer({
  typeDefs: 타입,
  resolvers: resolvers,
});

const 내DB연결설정 = new DataSource({
  type: "postgres",
  host: "34.64.158.127",
  port: 5022,
  username: "postgres",
  password: "postgres2025",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

내DB연결설정
  .initialize()
  .then(() => {
    console.log("DB접속 성공");
    //DB접속해놓고, 24시간 작동하자!
    startStandaloneServer(서버설정).then(() => {
      console.log("그래프큐엘 백엔드서버가 정상적으로 실행되었습니다."); // 기본포트 4000번으로 실행중
    });
  })
  .catch((error) => {
    console.log("DB접속 실패");
    console.log("원인: ", error);
  });
