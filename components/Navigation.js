import { useRouter } from "next/dist/client/router";
import Link from "next/link";
// import { CSSTransition } from "react-transition-group";
// import Hamburger from "./Hamburger";
import { useEffect, useState, useRef , createRef} from "react";
import { gsap, Power2, Expo } from "gsap";

export default function Navigation({ pages }) {

  const [menuOpen, setMenuOpen] = useState(true);
  const header = useRef(null);
  const headerrow = useRef(null);
  const menuToggle = useRef(null);
  const hamburger = useRef(null);
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);
  const fullpagemenu = useRef(null);
  const fullpagemenuinner = useRef(null);
  const menubg1 = useRef([]);
  const mainmenu = useRef(null);
  const mainmenu1 = useRef([]);
  const headernavfooter = useRef(null);
  const sociallinks = useRef(null);
  const sociallinks1 = useRef([]);

  const animation = useRef(null);
  const animation1 = useRef(null);
  //gsap

  useEffect(() => {
    animation.current = gsap.timeline();

    animation.current.to(
      bar1.current,
      0.5,
      {
        attr: { d: "M8,2 L2,8" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start");

    animation.current.to(
      bar2.current,
      0.5,
      {
        autoAlpha: 0,
      },
      "start");

    animation.current.to(
      bar3.current,
      0.5,
      {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start");

    animation.current.to(fullpagemenu.current, {
      duration:0,
      display: "block",
      ease: Expo.easeInOut,
    },
    "start");
    
    animation.current.from(menubg1.current, {
      duration:1,
      x:'100%',
      stagger: 0.1,
      ease: Expo.easeInOut,
    },
    "start");
    
    animation.current.from(mainmenu1.current, {
      duration:1.5,
      y:"100%",
      stagger: 0.2,
      ease: Expo.easeInOut
    } , "-=0.5");
    
    animation.current.from(sociallinks1.current, {
      duration:1,
      y:"-100%",
      opacity:0,
      stagger: 0.1,
      ease: Expo.easeInOut
    } , "-=0.5");

    if (!menuOpen) {
      animation.current.play();
    } else {
      animation.current.reverse();
    }
    return () => {
      animation.current.kill();
    };
    
}, [menuOpen]);

return (
  <div className="navigation" /* onClick={handleClick}*/>
    <header>
      <div className="header" ref={header}>
        <div className="header-row" ref={headerrow}>
          <Link href="#">asdf</Link>

          {/* ////////have to apply above gsap to this following menu-toggle */}

          <button className="menu-toggle"  onClick={() => setMenuOpen(!menuOpen)} ref={menuToggle}>
            <svg
              viewBox="0 0 12 10"
              className="hamburger"
              // clicked={click}
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
        <section className="fullpage-menu" onClick={() => setMenuOpen(!menuOpen)} ref={fullpagemenu}>
          <div className="fullpage-menu-inner"  ref={fullpagemenuinner}>
            <div className="menu-bg"  >
              <span ref={e1 => {menubg1.current[1] = e1;}}> </span>
              <span ref={e1 => {menubg1.current[2] = e1;}}></span>
              <span ref={e1 => {menubg1.current[3] = e1;}}></span>
              <span ref={e1 => {menubg1.current[4] = e1;}}> </span>
              <span ref={e1 => {menubg1.current[5] = e1;}}></span>
              <span ref={e1 => {menubg1.current[6] = e1;}}></span>
            </div>

            <nav>
              <ul className="main-menu" ref={mainmenu}>
                <li>
                  <Link href="/"  ref={e2 => {mainmenu1.current[1] = e2;}}>Index</Link>
                </li>
                <li>
                  <Link href="/page-one"  ref={e2 => {mainmenu1.current[2] = e2;}}>One</Link>
                </li>
                <li>
                  <Link href="/page-two"  ref={e2 => {mainmenu1.current[3] = e2;}}>Two</Link>
                </li>
                <li>
                  <Link href="/page-three"  ref={e2 => {mainmenu1.current[4] = e2;}}>Three</Link>
                </li>
                <li>
                  <Link href="/page-four"  ref={e2 => {mainmenu1.current[5] = e2;}}>Four</Link>
                </li>
              </ul>
            </nav>

            <div className="header-nav-footer" ref={headernavfooter}>
              <ul className="social-links" ref={sociallinks}>
                <li>
                  <Link href="#" ref={e3 => {sociallinks1.current[1] = e3;}}>Facebook</Link>
                </li>
                <li>
                  <Link href="#" ref={e3 => {sociallinks1.current[2] = e3;}}>Instagram</Link>
                </li>
                <li>
                  <Link href="#" ref={e3 => {sociallinks1.current[3] = e3;}}>Twitter</Link>
                </li>
                <li>&copy;2021</li>
              </ul>
            </div>
          </div>
        </section>
        </div>
      </div>
    </header>
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
