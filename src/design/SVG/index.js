import React from 'react';

const SVG = (props) => {
    const { name = "", ...rest } = props;

    return (
      <img
        src={require(`assets/svg/${name}.svg`)}
        alt={`${name} icon`}
        {...rest}
      />
    );
};

export default SVG;