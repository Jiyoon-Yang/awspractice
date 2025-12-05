"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>open modal</button>
      {/* 모달 종료 방식 - 숨기기 방식 (ex, 이력서 등) */}
      {/* <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 삭제 후 재생성 방식 */}
      {isModalOpen === true && (
        <Modal
          title="Basic Modal"
          closable={{ "aria-label": "Custom Close Button" }}
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default App;
