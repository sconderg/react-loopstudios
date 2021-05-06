import { useState } from "react";
import styled from "styled-components";

function Header() {
    const [navOpened, setNavOpened] = useState(false);
    const toggleNav = () => navOpened ? setNavOpened(false) : setNavOpened(true);
    return (
        <Container>
            <Navbar>
                <div className="container">
                    <img src="/images/logo.svg"  alt="loopstudios" />
                    <button className="navbar-toggler" onClick={toggleNav}>
                        <img src="/images/icon-hamburger.svg" alt="idk" />
                    </button>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                    {navOpened && (
                        <MobileNav>
                            <div className="head">
                                <img src="/images/logo.svg"  alt="loopstudios" />
                                <button className="navbar-toggler" onClick={toggleNav}>
                                    <img src="/images/icon-close.svg" alt="idk" />
                                </button>
                            </div>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Events</li>
                                <li>Products</li>
                                <li>Support</li>
                            </ul>
                        </MobileNav>
                    )}
                </div>
            </Navbar>
            <div className="container">
                <div className="heading">
                    <h1>Immersive experience that deliver</h1>
                </div>
            </div>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    background:url('../images/desktop/image-hero.jpg') center center no-repeat;
    background-size:cover;
    background-color:rgb(0 0 0 / 46%);
    background-blend-mode:color;
    height:80vh;
    > .container {
        padding-top:5em;
        .heading {
            border:1px solid white;
            padding:30px;
            color:#FFF;
            width:50%;
            @media(max-width:900px) {
                width:60%;
            }
            h1 {
                font-size:4em;
                margin:0;
                text-transform:uppercase;
            }
        }
    }
    @media (max-width:767px) {
        height:100vh;
        background-image:url('../images/mobile/image-hero.jpg');
        .container {
            padding-top:3em;
            .heading {
                width:100%;
                h1 {
                    font-size:2em;
                }
            }
        }
    }
`;
const Navbar = styled.div`
    padding:30px;
    .container {
        display:flex;
        justify-content:space-between;
        align-items:center;
        .navbar-toggler {
            display:none;
        }
        ul {
            list-style:none;
            padding:0;
            display:flex;
            color:white;
            li {
                font-size:16px;
                cursor:pointer;
                width:fit-content;
                padding-bottom:10px;
                border-bottom:1px solid transparent;
                transition:all ease-in-out 0.3s;
                :hover {
                    border-color:#FFF;
                }
                :not(:last-of-type)  {
                    margin-right:25px;
                }
            }
        }
    }
    @media (max-width:767px) {
        padding:20px 10px;
        .container {
            
            .navbar-toggler {
                display:block;
                background:none;
                border:none;
                outline:none;
                cursor:pointer;
            }
            > ul {
            display:none;
            }
        }
    }
`;

const MobileNav = styled.div`
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    padding:30px;
    left:0;
    display:flex;
    flex-direction:column;
    background-color:#000;
    z-index:5;
    .head {
        display:flex;
        align-items:center;
        justify-content:space-between;
        img {
            width:192;
            height:32px;
        }
    }
    ul {
        flex-direction:column;
        margin-top:5em;
        li {
            margin-right:0;
            margin-bottom:30px;
            font-size:3em !important;
            font-weight:300!important;
            font-family: "Josefin Sans", sans-serif;
        }
    }
`;