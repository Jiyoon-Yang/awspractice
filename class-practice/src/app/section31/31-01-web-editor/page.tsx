"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";

//코드 스플리팅 안됨
// import {Modal} from "antd"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const onSubmit = async (event) => {
    event.preventDefault();

    //코드 스플리팅(code-spliting)
    const { Modal } = await import("antd");
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  };
  // ReactQuill 개발자가 만든 onChange => 따라서, event 안들어옴
  const onChangeContent = (value) => {
    console.log(value);
  };
  //백그라운드 import
  // useEffect(() => {
  //   const { Modal } = import("antd");
  // }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          작성자: <input type="text" />
        </div>
        <div>
          비밀번호: <input type="password" />
        </div>
        <div>
          제목: <input type="text" />
        </div>
        <div>
          내용: <ReactQuill onChange={onChangeContent} />
        </div>
        <button>등록하기</button>
      </form>
    </>
  );
}
