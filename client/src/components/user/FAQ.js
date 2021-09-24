import React, {useState} from 'react';
import {FaqContainer} from '../../styles/js/userdashboard.styles';
import { Accordion, Icon } from 'semantic-ui-react';
import {ShoppingData, ReturnData} from './faqData'

const FAQ = ({SinglePage}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;

        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex(newIndex);
    }

    return (
        <FaqContainer SinglePage={SinglePage}>
            <h2>
                Frequently Asked Questions
            </h2>

            <h4>
                SHOPPING
            </h4>

            <Accordion>
                {ShoppingData.map((shop, i) => (
                    <div key={i}>
                    <Accordion.Title
                        active={activeIndex === shop.index}
                        index={shop.index}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        {shop.title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === shop.index}>
                        <p>
                        {shop.desc}
                        </p>
                    </Accordion.Content>
                    </div>
                ))}
            </Accordion>

            <hr></hr>

            <h4>
                DELIVERY AND RETURNS
            </h4>

            <Accordion>
                {ReturnData.map((shop, i) => (
                    <div key={i}>
                    <Accordion.Title
                        active={activeIndex === shop.index}
                        index={shop.index}
                        onClick={handleClick}
                    >
                    <Icon name='dropdown' />
                        {shop.title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === shop.index}>
                        <p>
                        {shop.desc}
                        </p>
                    </Accordion.Content>
                    </div>
                ))}
            </Accordion>
        </FaqContainer>
    )
};

export default FAQ;