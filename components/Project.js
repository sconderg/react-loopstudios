import styled from "styled-components";

function Project({text, desktopImg, mobileImg}) {
    return (
        <Container>
            <img className="mobile" src={mobileImg} alt={text} />
            <img className="desktop" src={desktopImg} alt={text} />
            <div className="overlay">
                <h3>{text}</h3>
            </div>
        </Container>
    )
}

export default Project;


const Container = styled.div`
    flex-basis:calc(25% - 20px);
    cursor:pointer;
    position:relative;
    margin:10px;
    img {
        width:100%;
        height:100%;
    }
    .mobile {
        display:none;
    }
    .overlay {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:99.2%;
        display:flex;
        justify-content:flex-end;
        flex-direction:column;
        align-items:center;
        transition:all ease-in-out 0.3s;
        h3 {
            font-size:2em;
            width:100%;
            text-align:center;
            text-transform:uppercase;
            color:white;
        }
    }
    :hover {
        .overlay {
            background-color:hsl(0deg 0% 70% / 63%);
            h3 {
                color:#000;
            }
        }
    }
    @media (max-width:767px) {
        .mobile {
            display:initial;
        }
        .desktop {
            display:none;
        }
        .overlay {
            h3 {
                font-size:1em;
            }
        }
    } 
`;