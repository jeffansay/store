import React from 'react';

const Tag = ({text, classStyle}) => {

  return (
    <>
        <h2 className={classStyle}>{text !== undefined ? text : 'Tag is h2 add "text"'}</h2>
    </>
  );
};

export default Tag;