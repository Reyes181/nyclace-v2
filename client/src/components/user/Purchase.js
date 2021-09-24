import React from 'react';
import {PurchaseContainer, PurchaseTitle, PurchaseTotal, PurchaseItemContainer, PurchaseItem,
    PurchaseItemImg, PurchaseItemDesc, PurchaseItemSpans
} from '../../styles/js/userdashboard.styles';

const Purchase = ({porder, date, total, items}) => {
    return (
        <PurchaseContainer>
            <PurchaseTitle>Order: {porder}</PurchaseTitle>

            <PurchaseTotal>
                <div>Total: ${total}</div>
                <div>Date: {date}</div>
            </PurchaseTotal>

            <PurchaseItemContainer>
                {items.map((item, i) => (
                    <PurchaseItem key={i}>
                        <PurchaseItemImg>
                            <div style={{background: `url(${item.image})`}}/>
                        </PurchaseItemImg>
                        <PurchaseItemDesc>
                            <div>{item.name}</div>
                            <PurchaseItemSpans>
                                <span>Size: {item.size}</span>
                                <span>Qty: {item.qty}</span>
                            </PurchaseItemSpans>
                            <div>${item.price}</div>
                        </PurchaseItemDesc>
                    </PurchaseItem>
                ))}
            </PurchaseItemContainer>
        </PurchaseContainer>
    )
};

export default Purchase;