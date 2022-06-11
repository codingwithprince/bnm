import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600
    });
}, []);


  return <Layout>
    <Component {...pageProps} /> 
    </Layout> 
}

export default MyApp
