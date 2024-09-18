import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    <>
      {domLoaded && <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
