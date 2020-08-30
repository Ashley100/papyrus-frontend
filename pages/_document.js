import Document, { Html, Head, Main, NextScript } from 'next/document'
import Sprite from "../utils/Sprite";


export default class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/*<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>*/}
                    <link rel="stylesheet" href="/icons/fa/css/all.min.css" />

                </Head>
                <body className="uif">

                    <Sprite/>

                    <Main/>

                    <NextScript/>

                </body>
            </Html>
        )
    }
}