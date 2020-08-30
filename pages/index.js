import Head from 'next/head'
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </MainLayout>
  )
}
