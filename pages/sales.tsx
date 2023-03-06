import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Sales() {
  return (
    <>
      <Head>
        <title>Concierge - Sales</title>
      </Head>

      <div></div>
    </>
  );
}

Sales.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
