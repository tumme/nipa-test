import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Sabaijaijung" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gray-50">
        {children}
      </div>
    </>
  );
};

export default Layout;
