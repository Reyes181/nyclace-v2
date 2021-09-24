import React from 'react';
import {FormCheckBox, FormRadio, FormColor} from '../../utils/FormField';
import {shoeSizes, clotheSizes, colors} from '../../utils/FixedFilters';
import {FilterContainer} from '../../styles/js/brand.styles';
import { AiOutlineLoading } from 'react-icons/ai';
import {LoadingSpinner} from '../../styles/js/card.styles';

const Filters = (props) => {
    return (
        <FilterContainer>
            {props.brandModels !== 'undefined' ?
                <>
                    <FormRadio 
                        num={0} 
                        filterType={'shoesize'}
                        handleClickAcord={props.handleClickAcord}
                        title={'Footwear Size'}
                        activeIndex={props.activeIndex}
                        content={shoeSizes}
                        handleSort={props.handleSort}
                        val={props.filterList.shoesize}
                    />
                    <FormRadio 
                        num={1} 
                        filterType={'clothesize'}
                        handleClickAcord={props.handleClickAcord}
                        title={'Apparel Size'}
                        activeIndex={props.activeIndex}
                        content={clotheSizes}
                        handleSort={props.handleSort}
                        val={props.filterList.clothesize}
                    />
                    <FormCheckBox 
                        num={2} 
                        filterType={'model'}
                        handleClickAcord={props.handleClickAcord}
                        title={'Model'}
                        activeIndex={props.activeIndex}
                        content={props.brandModels ? props.brandModels : ['loading']}
                        handleSort={props.handleSort}
                        val={props.filterList.model}
                    />
                    {/* <FormCheckBoxPrice 
                        num={3} 
                        filterType={'price'}
                        handleClickAcord={props.handleClickAcord}
                        title={'Price'}
                        activeIndex={props.activeIndex}
                        content={priceRange}
                        handleSort={props.handleSort}
                        val={props.filterList.price}
                    /> */}
                    <FormColor
                        num={4} 
                        filterType={'colors'}
                        handleClickAcord={props.handleClickAcord}
                        title={'Color'}
                        activeIndex={props.activeIndex}
                        content={colors}
                        handleSort={props.handleSort}
                        val={props.filterList.colors}
                    />
                </>
                :
                <LoadingSpinner>
                    <AiOutlineLoading size={'4rem'}/>
                </LoadingSpinner>
            }
        </FilterContainer>
    )
}

export default Filters