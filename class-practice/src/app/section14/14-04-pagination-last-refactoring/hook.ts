import { useState } from "react";

export const usePagination = (props) => {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return; // 첫 페이지면 이전 불가
    setStartPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage(startPage + 10);
      props.refetch({ page: startPage + 10 });
    }
  };

  return {
    startPage,
    onClickNextPage,
    onClickPage,
    onClickPrevPage,
  };
};
