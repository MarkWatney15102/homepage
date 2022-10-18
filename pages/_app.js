import  { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/footer";
import Banner from "../components/home/banner";
import Head from "next/head";

import '../styles/globals.css'

function Homepage({ Component, pageProps }) {
  return <>
    <Head>
        <title>Eike Eric Wientjes</title>
    </Head>
    <Banner />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default Homepage
