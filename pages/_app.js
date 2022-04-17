import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContextProvider } from "../components/store/auth-context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
