import { getSiteData } from "../lib/api";
import "../styles/index.css";

function MyApp({ Component, pageProps, siteData }) {
  return <Component {...pageProps} siteData={siteData} />;
}

MyApp.getInitialProps = async () => {
  const siteData = await getSiteData();

  return { siteData };
};

export default MyApp;
