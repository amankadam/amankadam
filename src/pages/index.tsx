import LandingPage from "@/components/LandingPage";
import type { ReactElement } from "react";
import Layout from "@/components/layout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <LandingPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
