import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Fragment } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

import ChildrenType from "@/types/children";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS learn",
  description: "fladjf lfdsjfklads lkfjd aslkfdjkl",
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
