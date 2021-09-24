import styled from 'styled-components';

export const HeaderToolBar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 12%;
    z-index: 100;
    background: white;
`;

export const HeaderNavigation = styled.nav`
    width: 90%;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        height: 80%;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0;
    }
`;

export const HeaderBurger = styled.div`
    height: 100%;
    flex-basis: 10%;
    display: grid;
    place-items: center;

    @media screen and (min-width: 1025px) {
        display: none
    }

    @media screen and (max-width: 800px) {
        flex-basis: 15%
    }
`;

export const HeaderMainNav = styled.div`
    height: 100%;
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 4rem;

    @media screen and (min-width: 1025px) {
        padding-left: 9rem;
    }

    @media screen and (max-width: 800px) {
        padding-left: 0;
        flex-basis: 75%;
    }
`;

export const HeaderMainLogo = styled.div`
    height: 100%;

    img {
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        a {
            display: grid;
            place-items: center;
            height: 100%;

            img {
                height: 80%;
                width: 80%;
            }
        }
    }
`;

export const HeaderNavItems =  styled.div`
    flex: 1;
    margin-top: -1rem;
    width: 100%;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        font-family: Proxima Nova,Helvetica,Arial,sans-serif;
        letter-spacing: .035em;
        text-transform: uppercase;
        font-size: 0.7rem;
        flex: 1;

        li {
            padding: 0 0.5rem;

            a {
                color: #484848;
                text-decoration: none;

                &:hover {
                    color: gray;
                }
                &:active {
                    color: gray;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        display: none
    }
`;

export const HeaderNavUsers = styled.div`
    flex-basis: 20%;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        li {
            padding: 0 0.5rem;

            a {
                text-decoration: none;
            }
        }
    }

    @media screen and (max-width: 800px) {
        flex-basis: 10%;

        ul {
            li{
                &:nth-child(2){
                    display: none
                }
            }
            
        }

    }
`;

export const ShoppingCart = styled.li`
    display: grid;
    place-items: center;
    margin-bottom: 0.35rem;

    span {
        z-index: 3;
        margin-top: -1.5rem;
        font-size: 0.7rem;
    }
`