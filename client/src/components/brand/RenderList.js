import React, {useState, useEffect} from 'react';
import Card from '../../utils/Card';
import Pagination from './Pagination';
import { Dropdown } from 'semantic-ui-react';
import { AiOutlineLoading } from 'react-icons/ai';
import {LoadingSpinner} from '../../styles/js/card.styles';
import {ProductList, ProductsContainer, SortContainer} from '../../styles/js/brand.styles'

const RenderList = ({items, isLoading, setListItems}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(21);
    const [currentItems, setCurrentItems] = useState([])

    useEffect(() => {
        setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // let currentItems = items !== null || undefined ? items.slice(indexOfFirstItem, indexOfLastItem) : [];
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const renderCards = () => (
        currentItems.map((item, i) => (
            <Card
                key={i}
                {...item}
            />
        ))
    );

    const sortingList = (e, data) => {
        if(data.value === 'lowPrice') {
            let newItems = items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            return setListItems([...newItems])
        } else if (data.value === 'highPrice') {
            let newItems = items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            return setListItems([...newItems])
        } else if (data.value === 'newArrival') {
            let newItems = items.sort((a, b) => parseFloat(a.createdAt) - parseFloat(b.createdAt));
            return setListItems([...newItems])
        } else return
    }

    const sortOptions = [
        {
            key: 1,
            text: 'New Arrivals',
            value: 'newArrival'
        },
        {
            key: 2,
            text: 'Price Low To High',
            value: 'lowPrice'
        },
        {
            key: 3,
            text: 'Price High To Low',
            value: 'highPrice'
        }
    ];


    return (
        <ProductList>
            {!isLoading ?
                <>
                    <SortContainer>
                        <div>
                            <Dropdown 
                                placeholder='Sort' 
                                search 
                                selection 
                                options={sortOptions} 
                                onChange={sortingList}
                            />
                        </div>
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={items.length}
                            paginate={paginate}
                            currentPageNum={currentPage}
                        />
                    </SortContainer>

                    <ProductsContainer>
                        {renderCards()}
                    </ProductsContainer>

                    <SortContainer>
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={items.length}
                            paginate={paginate}
                            currentPageNum={currentPage}
                        />    
                    </SortContainer>
                </>
            :
                <LoadingSpinner>
                    <AiOutlineLoading size={'4rem'}/>
                </LoadingSpinner>
                
            }
            
        </ProductList>
    )
}

export default RenderList;