import React from "react";
import { ReactSVG } from "react-svg";

function Icon({ ...props }) {
  const { name, className, color, height, width, ...rest } = props;
  const prefix = "/static/icons/";
  return name && <ReactSVG  {...rest}
    {...(color || height || width) ? {
      beforeInjection: ((svg) => {
        if (color) {
          // Modify the first `g` element within the SVG.
          const firstGElement = svg.querySelectorAll('path, rect');
          firstGElement.forEach(path => path.setAttribute('fill', color as string))
        }

        if (height && width) {
          svg.setAttribute('height', `${height}px`);
          svg.setAttribute('width', `${width}px`);
        }
      })
    } : {}}
    className={`react-svg ${className ? className : ''}`}
    src={`${prefix}${name}.svg`} />;
}

export default Icon;
