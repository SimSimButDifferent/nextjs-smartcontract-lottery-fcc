import Head from "next/head"
import ManualHeader from "../components/ManualHeader"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="My Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader></ManualHeader>
            Hello!
        </div>
    )
}
