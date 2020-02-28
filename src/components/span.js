import React from 'react';

const span = ({text, classStyle}) => {
    return (
        <>
          <span className={classStyle !== undefined ? classStyle : ''}>{text !== undefined ? text : 'Please add text'}</span>  
        </>
    );
};

export default span;