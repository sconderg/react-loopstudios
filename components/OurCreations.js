import styled from 'styled-components';
import Project from './Project';

function OurCreations() {
    return (
        <Container>
            <div className="container">
                <div className="head">
                    <h2>Our Creations</h2>
                    <Button>See All</Button>
                </div>
                <ProjectsContainer>
                    <Project 
                        text='Deep earth'
                        desktopImg="/images/desktop/image-deep-earth.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-deep-earth.jpg" alt="deep earth"
                     />
                    <Project 
                        text='Night arcade'
                        desktopImg="/images/desktop/image-night-arcade.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-night-arcade.jpg" alt="deep earth"
                     />
                    <Project 
                        text='Soccer team VR'
                        desktopImg="/images/desktop/image-Soccer-team.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-Soccer-team.jpg" alt="deep earth"
                     />
                    <Project 
                        text='The grid'
                        desktopImg="/images/desktop/image-grid.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-grid.jpg" alt="deep earth"
                     />
                    <Project 
                        text='From up above VR'
                        desktopImg="/images/desktop/image-from-above.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-from-above.jpg" alt="deep earth"
                     />
                    <Project 
                        text='Pocket borealis'
                        desktopImg="/images/desktop/image-pocket-borealis.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-night-arcade.jpg" alt="deep earth"
                     />
                    <Project 
                        text='The curiosity'
                        desktopImg="/images/desktop/image-curiosity.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-curiosity.jpg" alt="deep earth"
                     />
                    <Project 
                        text='Make it fisheye'
                        desktopImg="/images/desktop/image-fisheye.jpg" alt="deep earth"
                        mobileImg="/images/mobile/image-fisheye.jpg" alt="deep earth"
                     />
                </ProjectsContainer>
                <Button className="mobile">See All</Button>
            </div>
        </Container>
    )
}

export default OurCreations;

const Container = styled.div`
    padding:70px 0;
    .container {
        display:flex;
        flex-direction:column;
        .head {
            display:flex;
            justify-content:space-between;
            align-items:center;
            h2 {
                font-size:3em;
                text-transform:uppercase;
                @media(max-width:767px) {
                    font-size:2em;
                }
            }
        }
    }
`;
const Button = styled.button`
    background:transparent;
    border:1px solid #000;
    color:#000;
    padding:15px;
    outline:none;
    letter-spacing:7px;
    font-size:0.8em;
    font-weight:bold;
    text-transform:uppercase;
    height:fit-content;
    transition:all ease-in-out 0.3s;
    cursor:pointer;
    :hover {
        background-color:#000;
        color:#FFF;
    }
    &.mobile {
        display:none;
    }
    @media (max-width:767px) {
        display:none;
        &.mobile {
            display:block;
            width:fit-content;
            margin:auto;
        }
    }
`;

const ProjectsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    @media(max-width:767px) {
        flex-direction:column;
    }
`;