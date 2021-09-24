import styled from 'styled-components';

export const BackdropContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    top: 0;
    left: 0;
`;

export const SideNavUl = styled.ul`
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100%;

    li {
        flex: 17;
        padding: 0 10px;
        border-bottom: 1px solid #E0E0E0;
        display: grid;

        a {
            color: #484848;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: Proxima Nova,Helvetica,Arial,sans-serif;
            letter-spacing: .035em;
            text-transform: uppercase;
            font-size: 0.7rem;
            color: #707070;
        }
    }
`;

export const ImageLi = styled.li`
    display: grid !important;
    place-content: center !important;

    img {
        height: 100%;
        width: 100%;
    }
`