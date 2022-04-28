import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import type { AppProps } from "next/app";
// import "normalize.css"
import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import { animations } from "../lib/animations";
import "../styles/globals.css";
import "../styles/slider.scss";
import CursorProvider from "../components/cursorProvider";
import "../styles/styles.css";

const pages = [
  { href: "/", name: "Index" },
  { href: "/page-one", name: "One" },
  { href: "/page-two", name: "Two" },
  { href: "/page-three", name: "Three" },
  { href: "/page-four", name: "Four" },
];

function MyApp({ Component, pageProps, router }: AppProps) {
  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);

  console.log("exit before ", exitBefore);
  return (
    <CursorProvider>
      <div className="app-wrap">
        <div className="ui-wrap">
          <Navigation pages={pages} />
        </div>

        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter={!exitBefore}>
            <m.div
              key={router.route.concat(animation.name)}
              className="page-wrap"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animation.variants}
              transition={animation.transition}
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </CursorProvider>
  );
}
export default MyApp;
