"use client";

export default function BoardWriteAdvancedUI(props) {
  return (
    <>
      작성자:
      <input
        type="text"
        onChange={props.onChnageWirter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:
      <input
        type="text"
        onChange={props.onChnageTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:
      <input
        type="text"
        onChange={props.onChnageContent}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button
        onClick={
          props.isEdit === true ? props.onClickUpdate : props.onClickSubmit
        }>
        게시글 {props.isEdit === true ? "수정" : "등록"}하기
      </button>
    </>
  );
}
