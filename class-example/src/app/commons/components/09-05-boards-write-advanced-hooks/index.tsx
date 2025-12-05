"use client";
import useBoardWriteAdvanced from "@/app/commons/components/09-05-boards-write-advanced-hooks/hooks";

export default function BoardWriteAdvanced(props) {
  const {
    onChnageContent,
    onChnageTitle,
    onChnageWirter,
    onClickSubmit,
    onClickUpdate,
  } = useBoardWriteAdvanced();

  return (
    <>
      작성자:
      <input
        type="text"
        onChange={onChnageWirter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:
      <input
        type="text"
        onChange={onChnageTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:
      <input
        type="text"
        onChange={onChnageContent}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit === true ? onClickUpdate : onClickSubmit}>
        게시글 {props.isEdit === true ? "수정" : "등록"}하기
      </button>
    </>
  );
}
