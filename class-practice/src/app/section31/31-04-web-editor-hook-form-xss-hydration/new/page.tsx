"use client";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

//코드 스플리팅 안됨
// import {Modal} from "antd"

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log(data);
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...data,

          // wirter: data.writer,
          // password: data.password,
          // title: data.title,
          // contents: data.contents,
        },
      },
    });

    //코드 스플리팅(code-spliting)
    const { Modal } = await import("antd");

    const boardId = result.data.createBoard._id;
    router.push(`/section31/31-04-web-editor-hook-form-xss-hydration/${boardId}`);
  };

  // ReactQuill 개발자가 만든 onChange => 따라서, event 안들어옴
  const onChangeContent = (value) => {
    console.log(value);

    //register로 등록하지 않고, 강제로 값 넣어주는 방법
    setValue("contents", value);
    // 값만 넣지 말고, 변경을 감지해서 검증도 하자!
    trigger("contents");
  };
  //백그라운드 import
  // useEffect(() => {
  //   const { Modal } = import("antd");
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          작성자: <input type="text" {...register("writer")} />
        </div>
        <div>
          비밀번호: <input type="password" {...register("password")} />
        </div>
        <div>
          제목: <input type="text" {...register("title")} />
        </div>
        <div>
          내용: <ReactQuill onChange={onChangeContent} />
        </div>
        <button>등록하기</button>
      </form>
    </>
  );
}
