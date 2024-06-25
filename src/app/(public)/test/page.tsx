import { Metadata } from "next";

import Test from "./components/test";

export const metadata: Metadata = {
  title: "NextJS | Test page",
  description: "fladjf lfdsjfklads lkfjd aslkfdjkl",
};

const TestPage = () => {
  return (
    <div>
      <h1>TestPage</h1>
      <Test />
    </div>
  );
};

export default TestPage;
