import styled from "styled-components";

function Nav({mobile}) {
    const items = [
        {
            url:'/about',
            title:'About'
        },
        {
            url:'/careers',
            title:'Careers'
        },
        {
            url:'/events',
            title:'Events'
        },
        {
            url:'/products',
            title:'Products'
        },
        {
            url:'/support',
            title:'Support'
        },
    ];
    return (
        <>
            {mobile ? (
                <MobileContainer>
                    {items.map(item => (
                        <li>{item.title}</li>
                    ))}
                </MobileContainer>
            ) : (
                <Container>
                    {items.map(item => (
                        <li>{item.title}</li>
                    ))}
                </Container>
            )}
        </>
    )
}

export default Nav;

const Container = styled.ul`
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
    @media (max-width:767px) {
        display:none;
    }
}
`;

const MobileContainer = styled.ul`
    flex-direction:column;
    margin-top:5em;
    list-style:none;
    padding:0;
    li {
        margin-right:0;
        margin-bottom:30px;
        font-size:3em !important;
        font-weight:300!important;
        color:#FFF;
        font-family: "Josefin Sans", sans-serif;
    }
`;