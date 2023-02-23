import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/footer";
import Banner from "../components/home/banner";
import Head from "next/head";

import '../styles/globals.css';

import {useEffect} from "react";

function Homepage({Component, pageProps}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <>
    <Head>
      <title>Eike Eric Wientjes</title>
    </Head>
    <Banner/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default Homepage
