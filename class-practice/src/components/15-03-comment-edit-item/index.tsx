"use client";
import { useState } from "react";

export default function CommentItem({ el }) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(true);
  };

  return isEdit ? (
    <div key={el._id}>
      <input />
    </div>
  ) : (
    <div key={el._id}>
      <span>{el.title}</span>
      <span>{el.writer}</span>
      <button onClick={onClickEdit}>수정하기</button>
    </div>
  );
}
