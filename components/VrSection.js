import styled from "styled-components";
function VrSection() {
    return (
        <Container>
           <div className="container">
                <img className="desktop"  src='/images/desktop/image-interactive.jpg' alt="interactive" />
                <img className="mobile"  src='/images/mobile/image-interactive.jpg' alt="interactive"/>
                <div className="info">
                    <h2>The leader in interactive vr</h2>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality 
                        projects for some of the best companies around the globe. Our award-winning 
                        creations have transformed businesses through digital experiences that bind 
                        to their brand.
                    </p>
                </div>
           </div>
        </Container>
    )
}

export default VrSection;
const Container = styled.div`
    padding:70px 0;
    .container {
        display:flex;
        position:relative;
        .mobile {
            display:none !important;
        }
        .info {
            width:50%;
            height:fit-content;
            z-index:1;
            padding:70px;
            background-color:white;
            position:absolute;
            right:0;
            bottom:0%;
            h2 {
                font-size:50px;
                margin:0;
                text-transform:uppercase;
            }
            p {
                color:hsl(0, 0%, 55%);
                line-height:1.6;
            }
        }

    }
    @media(max-width:767px) {

        .container {
            flex-direction:column;
            .mobile {
                display:initial !important;
            }
            .desktop{
                display:none !important;
            }
            .info {
                position:static;
                padding:30px 15px;
                width:100%;
                text-align:center;
                h2 {
                    font-size:26px;
                }
            }
        }
    }
`;
