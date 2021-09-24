import React, {useEffect, useState, useRef} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { getModelsStart, getFilterProductStart, getAllProductsByBrandStart, getBrandNameStart} from '../../actions/productActions';
import { selectModel, selectFilter, selectAllBrandProd, selectAllBrandProdLoaded, selectIsProductFetching, selectBrandName } from '../../actions/product.selectors';
import {LoadingSpinner} from '../../styles/js/card.styles';
import Filters from './Filters';
import { AiOutlineLoading } from 'react-icons/ai';
import {Icon} from 'semantic-ui-react'
import BrandImg from '../../assets/img/brand.PNG';
import {HeaderBrandImg, HeaderBrandTitle, HeaderContainer, BrandContainer, NotItemFound} from '../../styles/js/brand.styles'
import RenderList from './RenderList';

const Brand = (props) => {
    const [items, setItems] = useState([]);
    const [filterChanged, setFilterChanged] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeIndex, setActiveIndex] = useState([]);
    const [filterList, setFilterList] = useState({
        model:[],
        footwear:[],
        shoesize:[],
        clothesize:[],
        colors:[],
        price:[]
    })

    const {brandId} = props.location.state;
    const {brandName, getBrandNameStart, isFetching, products, models, filterProd, isBrandProductsLoaded, getFilterProductStart, getModelsStart, getAllProductsByBrandStart} = props;

    const mounted = useRef();

    useEffect(() => {
        getBrandNameStart(brandId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[brandId]);

    useEffect(() => {
        if(brandName !== null){
            document.title = `${brandName[0].name} - NYCLace`
        }
    }, [brandName])

    useEffect(() => {
        getAllProductsByBrandStart(brandId);
        getModelsStart(brandId);
        window.scrollTo(0, 0);
        getFilterProductStart({
            'id': brandId,
            'skip': 0,
            'limit': 100,
            'filters': filterList
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandId, getAllProductsByBrandStart, getModelsStart, getFilterProductStart]);

    useEffect(() => {
        setItems(filterProd);
        if (!mounted.current) {
            mounted.current = true;
          } else {
            setCurrentPage(1)
        }
    }, [filterProd]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    


    const handleClickAcord = (e, titleProps) => {
        const {index} = titleProps;
        const newIndex = activeIndex;

        const currentIndexPosition = activeIndex.indexOf(index);
        if (currentIndexPosition > -1) {
            newIndex.splice(currentIndexPosition, 1);
        } else {
            newIndex.push(index);
        }

        setActiveIndex([...newIndex])
    };

    const showFilteredResults = (filters) => {
        if(items.length >= products.length){
            getFilterProductStart({
                'id': brandId,
                'skip': 0,
                'limit': items.length,
                'filters': filters
            })
        } else {
            getFilterProductStart({
                'id': brandId,
                'skip': 0,
                'limit': 100,
                'filters': filters
            })
        }
    }

    const handleSort = (e, data) => {
        const category = data.content;
        let newFilters = {...filterList}

        if(newFilters[category].includes(data.value)){
            newFilters[category] = newFilters[category].filter(e => e !== data.value)
            
        } else {
            newFilters[category].push(data.value);
        }

        setFilterChanged(newFilters);
        setFilterList(newFilters);
        showFilteredResults(newFilters);
    }

    

    const setListItems = (item) => {
        return setItems(item)
    }

    
    return (
        <div style={{marginTop: '6em'}}>
            {items === null  ?
                <LoadingSpinner>
                    <AiOutlineLoading size={'4rem'}/>
                </LoadingSpinner>
            :
                <div>
                    <HeaderContainer>
                        <HeaderBrandImg style={{background: `url(${BrandImg})`}}>
                            <HeaderBrandTitle>
                                <span>SHOP</span>
                                <h3>NYC LACE</h3>
                                <div>
                                    Find all your favorites at NYC Lace. Shop the latest and greatest releases from 
                                    Nike, Jordan, Adidas, Vans, and much more.
                                </div>
                            </HeaderBrandTitle>
                        </HeaderBrandImg>
                    </HeaderContainer>

                    <BrandContainer>
                        <Filters
                            brandModels={models}
                            handleClickAcord={handleClickAcord}
                            activeIndex={activeIndex}
                            handleSort={handleSort}
                            filterList={filterList}
                        />
                        {!isFetching  ?
                            <>
                                {filterChanged.length !== 0 && items.length === 0 ?
                                    <NotItemFound>
                                        <Icon name='remove' size='huge' color='red'/>
                                        <div>No item(s) were found!</div>
                                    </NotItemFound>
                                    :
                                    <RenderList
                                        isLoading={!isBrandProductsLoaded}
                                        isFetching={isFetching}
                                        items={items}
                                        setListItems={setListItems}
                                    />
                                }
                            </>

                            :
                            <LoadingSpinner>
                                <AiOutlineLoading size={'4rem'}/>
                            </LoadingSpinner>
                        }
                    </BrandContainer>
                </div>
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsProductFetching,
    isBrandProductsLoaded: selectAllBrandProdLoaded,
    models: selectModel,
    filterProd: selectFilter,
    products: selectAllBrandProd,
    brandName: selectBrandName
})

const mapDispatchToProps = dispatch => ({
    getFilterProductStart: (data) => dispatch(getFilterProductStart(data)),
    getModelsStart: (brandId) => dispatch(getModelsStart(brandId)),
    getAllProductsByBrandStart: (id) => dispatch(getAllProductsByBrandStart(id)),
    getBrandNameStart: (id) => dispatch(getBrandNameStart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Brand);