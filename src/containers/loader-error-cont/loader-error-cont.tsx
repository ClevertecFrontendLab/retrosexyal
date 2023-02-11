import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader";

import { RootState } from "../../redux/store";

export const LoaderErrorCont = () => {
  const { loading, status } = useSelector((state: RootState) => state.books);
  useEffect(() => {
    const { style } = document.body;
    if (loading) {
      style.overflow = "hidden";
    } else {
      style.overflow = "auto";
    }
    return () => {
      style.overflow = "auto";
    };
  }, [loading]);
  return (
    <div>
      {loading && <Loader />}
    </div>
  );
};
