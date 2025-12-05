"use client";

import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccess = () => {
    Modal.success({ content: "성공 ㅋ" });
  };
  const onClickError = () => {
    Modal.error({ content: "실패 ㅋ" });
  };
  return (
    <>
      <button onClick={onClickSuccess}>성공한 경우</button>
      <br />
      <button onClick={onClickError}>실패한 경우</button>
    </>
  );
}
