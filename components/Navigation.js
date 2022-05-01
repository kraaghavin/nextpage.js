import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";
import Hamburger from "./Hamburger";
import { gsap, Power2 } from "gsap";

export default function Navigation({ pages }) {
  const router = useRouter();

  const header = useRef();
  const headerrow = useRef();
  const menutoggle = useRef();
  const hamburger = useRef();
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();
  const fullpagemenu = useRef();
  const fullpagemenuinner = useRef();
  const menubg = useRef();
  const mainmenu = useRef();
  const headernavfooter = useRef();
  const sociallinks = useRef();

  //experiment with on click
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  //gsap

  useEffect(() => {
    var menuBar = gsap.timeline();
    var menuToggle = document.getElementById("menuToggle");
    var tl = gsap.timeline({ paused: true });
    menuBar.to(
      bar1.current,
      0.5,
      {
        attr: { d: "M8,2 L2,8" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    menuBar.to(
      bar2.current,
      0.5,
      {
        autoAlpha: 0,
      },
      "start"
    );

    menuBar.to(
      bar3.current,
      0.5,
      {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    menuBar.reverse();

    tl.to(fullpagemenu.current, {
      duration: 0,
      display: "block",
      ease: "Expo.easeInOut",
    });

    tl.from(menubg.current, {
      duration: 1,
      x: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });

    tl.from(
      mainmenu.current,
      {
        duration: 1.5,
        y: "100%",
        stagger: 0.2,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );

    tl.from(
      sociallinks.current,
      {
        duration: 1,
        y: "-100%",
        opacity: 0,
        stagger: 0.1,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );

    tl.reverse();
    menuToggle.addEventListener("click", function () {
      menuBar.reversed(!menuBar.reversed());
      tl.reversed(!tl.reversed());
    });
  }, [click]);
 
  return (
    <div className="navigation" onClick={handleClick}>
      <header>
        <div className="header" ref={header}>
          <div className="header-row" ref={headerrow}>
            <Link href="#">asdf</Link>
          </div>

          {/* ////////have to apply above gsap to this following menu-toggle */}

          <button className="menu-toggle" id="menuToggle">
            <svg
              viewBox="0 0 12 10"
              className="hamburger"
              clicked={click}
              ref={hamburger}
              height="40px"
              width="40px"
            >
              <path d="M10,2 L2,2" className="bar-1" ref={bar1}></path>
              <path d="M2,5 L10,5" className="bar-2" ref={bar2}></path>
              <path d="M10,8 L2,8" className="bar-3" ref={bar3}></path>
            </svg>
          </button>
          {/* <Hamburger /> */}
        </div>
      </header>

      <section className="fullpage-menu" ref={fullpagemenu}>
        <div className="fullpage-menu-inner" ref={fullpagemenuinner}>
          <div className="menu-bg" ref={menubg}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav>
            <ul className="main-menu" ref={mainmenu}>
              <li>
                <Link href="/">Index</Link>
              </li>
              <li>
                <Link href="/page-one">One</Link>
              </li>
              <li>
                <Link href="/page-two">Two</Link>
              </li>
              <li>
                <Link href="/page-three">Three</Link>
              </li>
              <li>
                <Link href="/page-four">Four</Link>
              </li>
            </ul>
          </nav>

          <div className="header-nav-footer" ref={headernavfooter}>
            <ul className="social-links" ref={sociallinks}>
              <li>
                <Link href="#">Facebook</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
              <li>&copy;2021</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

// {{
//   pages.map((page) => {
//     return (

//       <Link href={page.href} key={page.href}>
//         <Link className={router.route === page.href ? "selected" : ""}>
//           {page.name}
//         </Link>
//       </Link>}
//   );
// })}}
