import React from 'react';


const Container = ({ className, children }) => {
  return <div className={`w-10/12 mx-auto ${className}`}>
      {children}</div>;
};

export default Container;