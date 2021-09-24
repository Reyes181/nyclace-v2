import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDetail} from '../../actions/product.selectors';
import Spinner from '../../hoc/spinner';
import {ProductSpecs, ProductTitles, ProductSelect, ProductBorder, ProductButton, ProductDetail, ProductDesc, ProductDetailList, ProductReturn} from '../../styles/js/product.styles';

const ProductInfo = (props) => {
    const [sizeArray, setSizeArray] = useState([]);
    const [sizeValue, setSizeValue] = useState('');
    const [item, setItem] = useState([])
    const {shoesize, clothesize, productType, color, name,
           style, model, description, price, brand, footwear } = props.products;
    
    useEffect(() => {
        if(productType === 'Shoe'){
            return setSizeArray(shoesize)
        } else {
            return setSizeArray(clothesize)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productType])


    useEffect(() => {
        let itemInfo = props.products;
        if(sizeValue !== ''){
            itemInfo.size = sizeValue
        }
        setItem(itemInfo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sizeValue])

    const generateSize = () => {
        return (
            <ProductSelect
                onChange={(event) => setSizeValue(event.target.value)}
            >
                <option style={{color: '#f2f2f2'}} value="">CHOOSE YOUR SIZE (U.S.)</option>
                {
                    sizeArray.map((item, i)=>(
                        <option key={i} value={item}>
                            {item}
                        </option>
                    ))
                }
            </ProductSelect>
        )
    }

    return (
        props.isLoading ? <Spinner/> 
        :
        <ProductSpecs>
            <ProductTitles>
                <div>{brand.name}</div>
                <span style={{textTransform: 'capitalize'}}>{model}</span>
                <span>{name}</span>
                <span>${price}</span>
            </ProductTitles>
            {generateSize()}
            <ProductButton 
                disabled={sizeValue === ''}
                onClick={() => props.handleAddToCart(item)}
            >
                {sizeValue === '' ?
                    'Select Size'
                    :
                    'Add To Cart'
                }
            </ProductButton>
            <ProductBorder/>
            <ProductDetail>
                <h3>Details</h3>
                <ProductDesc>
                    {description}
                </ProductDesc>
                <ProductDetailList>
                    <div>
                        <p>Manufacturer Sku</p>
                        <p>{style}</p>
                    </div>
                    <div>
                        <p>Colorway</p>
                        <p>
                            {color.map((item, i) => {return(<span key={i}>{item} / </span>)})}
                        </p>
                    </div>
                    <div>
                        <p>Type</p>
                        <p>{footwear.style}</p>
                    </div>
                </ProductDetailList>
            </ProductDetail>
            <ProductReturn>
                <div>
                    <h3>Accepting Returns</h3>
                    <p>
                        We accept returns for store credit, within 3 business days of receipt items must be tagged
                        and in new/unworn condition.
                    </p>
                </div>
                
                <div>
                    <h3>100% Authentic, Guaranteed</h3>
                    <p>
                        Authenticity is the foundation of our business, and every item we sell is inspected by our 
                        expert team. Our authenticators are the most experienced and highly trained in the business.
                        In addition, we source our products only from trusted suppliers. 
                    </p>
                </div>
            </ProductReturn>
        </ProductSpecs>
    );
}

const mapStateToProps = createStructuredSelector({
    products: selectDetail
});

export default connect(mapStateToProps)(ProductInfo);