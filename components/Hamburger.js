import React,{useState} from "react";
import styled from "styled-components";


const MenuLabel = styled.label`
  background-color: #B6EDC8;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;


export default function Hamburger() {
  
const [click, setClick] = useState(true);
const handleClick = () => setClick(!click);
  
  return (
    <>
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
            {/* <button className="menu-toggle" id="menuToggle" onClick={() => Toggle()}>
            
            <svg viewBox="0 0 12 10" className="hamburger" height="40px" width="40px">
              <path d="M10,2 L2,2" className="bar-1"></path>
              <path d="M2,5 L10,5" className="bar-2"></path>
              <path d="M10,8 L2,8" className="bar-3"></path>

            </svg>
          </button>  */}
                <Icon clicked={click}>&nbsp;</Icon>
        </MenuLabel>
    </>
  );
}