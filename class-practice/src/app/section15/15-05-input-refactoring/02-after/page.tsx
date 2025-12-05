"use client";

import { useState } from "react";

export default function InputsRefactoringBeforePage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    content: "",
  });

  //   const onChangeInputs = (event) => {
  //     setInputs({
  //       ...inputs,
  //       //   writer: inputs.writer,
  //       //   title: inputs.title,
  //       //   content: inputs.content,

  //       [event.target.id]: event.target.value,
  //       // writer: event.target.value,
  //       // tite: event.target.value,
  //       // content: event.target.value,
  //     });
  //   };

  //   return (
  //     <>
  //       <input id="writer" type="text" onChange={onChangeInputs} />
  //       <br />
  //       <input id="title" type="text" onChange={onChangeInputs} />
  //       <br />
  //       <input id="content" type="text" onChange={onChangeInputs} />
  //     </>
  //   );
  // }
  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev,
      //   writer: inputs.writer,
      //   title: inputs.title,
      //   content: inputs.content,

      [event.target.id]: event.target.value,
      // writer: event.target.value,
      // tite: event.target.value,
      // content: event.target.value,
    }));
  };

  return (
    <>
      <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      <input id="content" type="text" onChange={onChangeInputs} />
    </>
  );
}
