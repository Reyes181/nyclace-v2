import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100%;
    margin-top: 8rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TopHeader = styled.div`
    font-size: 4rem;
    text-align: center;
    font-weight: 700;
    margin: 5rem 0 2rem 0;
    font-family: 'Share', cursive;
    color: #7e4de8;

    @media screen and (max-width: 800px) {
        font-size: 1.85rem;
        margin: 0;
        background-color: #0c0c0c;
        height: 5rem;
        line-height: 75px;
        color: #fff;
    }
`;

export const MainLevel = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 3rem auto;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 0 auto;
    }

    @media screen and (max-width: 800px) {
        width: 60%;
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 700px) {
        width: 90%;
    }
`;

export const LeftContainer = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    height: 100%;

    @media screen and (max-width: 1024px){
        height: auto,
        flex: 1
    }
`;

export const BoxTitle = styled.div`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0;
    font-family: 'Share', cursive;
`;

export const RightContainer = styled.div`
    flex-basis: 60%;
    height: 80vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px){
        height: auto;
        flex: 2
    }

    @media screen and (max-width: 800px){
        height: 20%;
        flex: none
    }
`;

export const OrderContainer = styled.div`
    display: flex;
    height: 100%;
    padding: 3rem;
    border-left: 2px solid #6435c9;

    @media screen and (max-width: 1024px) {
        border-left: none;
        padding: 0;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        padding: 1rem;
        height: 30%;
    }
`;

export const OrderHistory = styled.div`
    flex-basis: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }

    @media screen and (max-width: 1024px) {
        height: auto;
    }

    @media screen and (max-width: 800px) {
        flex: 3;
        margin-bottom: 1rem;
    }
`;

export const PurchaseEmpty = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PurchaseContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const PurchaseTitle = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
`;

export const PurchaseTotal = styled.div`
    font-size: 0.9rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PurchaseItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`;

export const PurchaseItem = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const PurchaseItemImg = styled.div`
    flex-basis: 40%;
    height: 100%;

    div {
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 800px){
        height: auto;
    }
`;

export const PurchaseItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;

    div {
        font-weight: 500;
        font-size: 0.875rem;
    }
`;

export const PurchaseItemSpans = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const UserInfo = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex: none;
        height: 8%;
        justify-content: flex-end;
        flex-direction: column-reverse;
    }
`;

export const UserBox = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
    width: 100%;
    border: 4px solid #6435c9;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background-color: #fff;

    @media screen and (max-width: 1024px) {
        height: 25%;
    }

    @media screen and (max-width: 800px) {
        height: 80%;
        margin-bottom: 2rem;
    }
`;

export const InfoHeader = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 0.9rem;
    font-weight: 500;
`;

export const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;

    span:nth-child(2) {
        color: #6435c9;
    }
`;

export const AddressInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-transform: uppercase;
        color: #6435c9;
        align-items: flex-end;
    }
 
`;

export const SignOutButton = styled.div`
    margin: 0 auto;
    width: 80%
`

export const BottomLogo = styled.div`
    align-self: flex-end;
    width: 50%;
    height: 20%;

    @media screen and (max-width: 800px){
        align-self: center;
        height: 10%;
        padding-left: 1rem;
        margin-bottom: 1rem;
    }
`;

export const ProfileContainer = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MiniPromoBox = styled.div`
    height: 40%;
    width: 100%;
    margin-top: 1rem;
    
    div {
        background-size: contain !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const singlePageFaq = styled.div`
    width: 80% !important;
    margin: 10rem !important;
`;

export const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80vh;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    
    hr {
        border: 0;
        height: 1px;
        background: #333;
        background-image: linear-gradient(to right, #ccc, #333, #ccc);
        width: 80%;
        margin-left: 0;
    }
`