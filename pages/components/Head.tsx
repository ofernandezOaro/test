import Head from "next/head";
import { FunctionComponent } from "react";
import InterfaceHead from "../../utilities/interfaces/interfaceHead";


const CustomHead: React.FC<InterfaceHead> = ({
  title,
  metaDescription,
  favIcon = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href={favIcon} />
    </Head>
  );
};

export default CustomHead;
