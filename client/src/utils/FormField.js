import React from 'react';
import {Accordion, Icon, Form } from 'semantic-ui-react';
import '../styles/css/form.styles.scss';

export const FormSelect = (props) => {
    return (
        <Accordion>
            <Accordion.Title
                active={props.activeIndex.includes(props.num)}
                index={props.num}
                onClick={props.handleClickAcord}
            >
            <Icon name='dropdown' />
                {props.title}
            </Accordion.Title>
            <Accordion.Content active={props.activeIndex.includes(props.num)}>
                <Form.Group>
                    <Form.Select
                        fluid
                        label={props.label}
                        options={props.content}
                        placeholder={props.placeholder}
                    />
                </Form.Group>
            </Accordion.Content>
        </Accordion>
    )
}

export const FormRadio = (props) => {
    return (
        <Accordion>
            <Accordion.Title
                active={props.activeIndex.includes(props.num)}
                index={props.num}
                onClick={props.handleClickAcord}
                className='form_title'
            >
            <Icon name='dropdown' />
                {props.title}
            </Accordion.Title>
            <Accordion.Content active={props.activeIndex.includes(props.num)}>
                <Form.Group
                    className='form_row_container'
                >
                    {props.content.map((item, i) => (
                        <Form.Checkbox
                            content={props.filterType}
                            key={i}
                            label={item}
                            value={item}
                            checked={props.val && props.val.includes(item)}
                            onChange={props.handleSort}
                            className='form_radio'
                        />    
                    ))}
                </Form.Group>
            </Accordion.Content>
        </Accordion>
    )
}

export const FormColor = (props) => {
    return (
        <Accordion>
            <Accordion.Title
                active={props.activeIndex.includes(props.num)}
                index={props.num}
                onClick={props.handleClickAcord}
                className='form_title'
            >
            <Icon name='dropdown' />
                {props.title}
            </Accordion.Title>
            <Accordion.Content active={props.activeIndex.includes(props.num)}>
                <Form.Group
                    className='form_row_container'
                >
                    {props.content.map((item, i) => (
                        <div key={i} className='form_color'>
                            <Form.Checkbox
                                content={props.filterType}
                                value={item}
                                checked={props.val && props.val.includes(item)}
                                onChange={props.handleSort}
                                className='form_color_radio'
                            />
                            <div
                                style={{backgroundColor: `${item}`}}
                                className='form_color_div'
                            /> 
                        </div>   
                    ))}
                </Form.Group>
            </Accordion.Content>
        </Accordion>
    )
}

export const FormCheckBox = (props) => {
    return (
        <Accordion>
            <Accordion.Title
                active={props.activeIndex.includes(props.num)}
                index={props.num}
                onClick={props.handleClickAcord}
                className='form_title'
            >
            <Icon name='dropdown' />
                {props.title}
            </Accordion.Title>
            <Accordion.Content active={props.activeIndex.includes(props.num)}>
                <Form.Group>
                    {props.content.map((item, i) => (
                        <Form.Checkbox
                            content={props.filterType}
                            key={i}
                            label={item}
                            value={item}
                            checked={props.val && props.val.includes(item)}
                            onChange={props.handleSort}
                            className='form_checkbox'
                        />    
                    ))}
                </Form.Group>
            </Accordion.Content>
        </Accordion>
    )
}

export const FormCheckBoxPrice = (props) => {
    return (
        <Accordion>
            <Accordion.Title
                active={props.activeIndex.includes(props.num)}
                index={props.num}
                onClick={props.handleClickAcord}
                className='form_title'
            >
            <Icon name='dropdown' />
                {props.title}
            </Accordion.Title>
            <Accordion.Content active={props.activeIndex.includes(props.num)}>
                <Form.Group>
                    {props.content.map((item, i) => (
                        <Form.Checkbox
                            content={props.filterType}
                            key={i}
                            label={item.name}
                            value={item._id}
                            checked={props.val && props.val.includes(item.array[0])}
                            onChange={props.handleSort}
                            className='form_checkbox'
                        />    
                    ))}
                </Form.Group>
            </Accordion.Content>
        </Accordion>
    )
}