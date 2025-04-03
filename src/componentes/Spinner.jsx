import React from "react";
  import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <LoaderCircle size={40} className=" mt-9  text-blue-500 animate-spin animate-infinite animate-ease-linear animate-normal"/>
  );
};

export default Spinner;
