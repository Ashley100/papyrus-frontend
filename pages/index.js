import Head from 'next/head'
import MainLayout from "../components/MainLayout";
import style from "../components/pages/auth/signin.module.scss";
import {motion} from "framer-motion";

export default function Home() {
    const init = { opacity: 0 }
    const animation = { opacity: 1 }
    const exit = { opacity: 0 }
    const transition = { duration: 0.1 }

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <motion.div className={`${style.signin} container`}
                    initial={init}
                    animate={animation}
                    transition={transition}
                    exit={exit}
        >
            asdasd
        </motion.div>
    </MainLayout>
  )
}
