import Head from "next/head";
import Layout from "../components/layout/layout";
import { getDaysInRange } from "../utils/date.utils";

export default function Calendar() {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 50);
  const dates = getDaysInRange(startDate, 100);

  return (
    <>
      <Head>
        <title>Concierge - Calendar</title>
      </Head>

      <div></div>
    </>
  );
}

Calendar.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
