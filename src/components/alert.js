import React from 'react';
import Span from './span';

const Alert = ({text, classStyle}) => {
    return (
        <>
          <Span text={text} classStyle={classStyle}/>
        </>
    );
};

export default Alert;