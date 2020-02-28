import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = ({content}) => {
    
    if(content instanceof Array) {

    return (
        <>
          {content.map((list, index) => {
            return (<li key={index} className='list-item'>
                <NavLink exact to={list.path} activeClassName="selected">{list.text}</NavLink>
            </li>)
          })}
        </>
    );

    }

    return <h2>No Array was found! please use array and have a text and path object</h2>
};

export default Nav;