import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Guests() {
  return (
    <>
      <Head>
        <title>Concierge - Guests</title>
      </Head>

      <div></div>
    </>
  );
}

Guests.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
