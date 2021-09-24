import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 5rem;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const HeaderBrandImg = styled.div`
    height: 315px;
    background-repeat: no-repeat !important;
    background-position: right !important;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        align-items: flex-end;
        justify-content: center;
        background-size: contain !important;
        background-position: top !important;
    }
`;

export const HeaderBrandTitle = styled.div`
    flex-basis: 40%;
    height: 60%;
    background: #fff;

    @media screen and (max-width: 800px) {
        height: 80%;
        flex-basis: 80%;
        padding: 0.7rem;
    }
`;

export const BrandContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 20%) auto;
    width: 90%;
    margin: 0.75rem auto;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        background: #3b3c42;
        border-radius: 8px;
        padding: 10px;
    }
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;

    @media screen and (max-width: 800px) {
        margin-top: 1.75rem;
    }
`;

export const ProductsContainer = styled.div`
    flex-wrap: wrap;
    display: flex;

    @media screen and (max-width: 800px) {
        a {
            flex-basis: 100% !important
        }
    }
`;

export const SortContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    @media screen and (max-width: 800px){
        flex-direction: column-reverse;
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    label {
        flex-basis: 90%;
        text-align: end;
        padding-right: 0.2rem;
        font-weight: 700;
    }

    ul {
        flex-basis: 10%;
        display: flex;
        justify-content: space-around;
        padding: 0;
        list-style: none;
        margin: 0.5rem 0 1em 0;

        button {
            display: inline-block;
            zoom: 1;
            padding: 0;
            background-color: #fff;
            margin: 0px 3px 10px;
            cursor: pointer;
            border: 1px solid #eee;
            position: relative;
            text-transform: uppercase;
            font-size: 13px;
            font-weight: 700;
            min-width: 44px !important;
            height: 34px !important;
            line-height: 34px;
            white-space: nowrap;
            text-transform: uppercase;
            text-align: center;

            &:focus {
                background-color: #0c0c0c !important; 
                border: 1px solid #0c0c0c !important; 
                color: #fff !important;
                outline: 0;
            }
        }
    }

    @media screen and (max-width: 800px) {
        justify-content: center;

        label {
            text-align: center;
        }
    }
`;

export const NotItemFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;
    margin: 2rem auto;

    div {
        font-size: 1.5rem;
        margin-top: 1rem;
        font-weight: 700;
    }
`;