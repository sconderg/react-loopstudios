import styled from "styled-components";

function Footer() {
    return (
        <MyFooter>
            <div className="container">
                <div className="left">
                    <img src="/images/logo.svg"  alt="loopstudios"/>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li><img src="images/icon-facebook.svg" alt="social media"/></li>
                        <li><img src="images/icon-twitter.svg" alt="social media"/></li>
                        <li><img src="images/icon-pinterest.svg" alt="social media"/></li>
                        <li><img src="images/icon-instagram.svg" alt="social media"/></li>
                    </ul>
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </MyFooter>
    )
}

export default Footer;

const MyFooter = styled.footer`
    background-color:#000;
    padding:30px;
    color:hsl(0, 0%, 55%);
    .container {
        display:flex;
        align-items:center;
        justify-content:space-between;
        ul {
            list-style:none;
            padding:0;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            li {
                color:#FFF;
                padding-bottom:10px;
                width:fit-content;
                margin-right:15px;
                border-bottom:1px solid transparent;
                transition:all ease-in-out 0.3s;
                :hover {
                    border-color:#FFF;
                }
            }
        }
        p {
            font-size:.8em;
        }
    }
    @media (max-width:767px) {
        padding:30px 0;
        .container {
            flex-direction:column;
            text-align:center;
            .left ul{
                flex-direction:column;
            }
        }

    }
`;