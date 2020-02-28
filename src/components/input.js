import React from 'react';

const Input = ({type, placeholder, value, fn, classStyle}) => {
    return (
        <>
          <input type={type !== undefined ? type : 'text'} 
                 placeholder={placeholder !== undefined ? placeholder : 'this placeholder is editable'}
                 className={classStyle !== undefined ? classStyle : ''}
                 value={value}
                 onChange={fn}
                 step={type !== 'number' ? '' : '.01'}/>
        </>
    );
};

export default Input;