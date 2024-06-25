"use client"

import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  return <input className="my-3 border border-2 border-[black]" type="text" />;
};

export default Input;
