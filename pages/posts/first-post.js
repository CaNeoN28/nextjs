import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//import Script from "next/script";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <Image
        src="/images/profile.jpeg"
        width={240}
        height={240}
        alt="Carlos Felipe" />
      <h1>
        First Post!
      </h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}