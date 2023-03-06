import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Rooms() {
  return (
    <>
      <Head>
        <title>Concierge - Rooms</title>
      </Head>

      <div></div>
    </>
  );
}

Rooms.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
