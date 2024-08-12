import Head from "next/head";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Aman Kadam | Full Stack Developer</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
