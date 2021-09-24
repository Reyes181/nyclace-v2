import React, {memo} from 'react';
import {PaginationContainer} from '../../styles/js/brand.styles';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPageNum }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <PaginationContainer>
            <label>Page {currentPageNum} of {pageNumbers.length}</label>
            <ul>
                {pageNumbers.map(number => (
                <li key={number}>
                    <button 
                      onClick={() => paginate(number)} 
                      style={{
                        background: number === currentPageNum ? 'black' : 'white',
                        color: number === currentPageNum ? 'white' : 'black'
                      }}
                    >
                    {number}
                    </button>
                </li>
                ))}
            </ul>
        </PaginationContainer>
    </nav>
  );
};

export default memo(Pagination);