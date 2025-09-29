import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 
import "../styles/style.css";                    // ✅ ye 100% chalega
import "nprogress/nprogress.css";                // NProgress default CSS



export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
