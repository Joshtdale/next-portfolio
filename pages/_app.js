import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/portfolio.css'
import '@/styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence>
        <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            x: 500,
          },
          animateState: {
            opacity: 1,
            x: 0,
          },
          exitState: {
          },
        }}
        >
          {/* <Header/>
          <Navbar/> */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}