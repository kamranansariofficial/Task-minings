import React from 'react';
import { ReactSVG } from 'react-svg';

interface SvgIconProps {
  name: string;
  width?: number;
  height?: number;
  color?: string; // Optional color for the SVG fill
  className?: string;
}

const Icon: React.FC<SvgIconProps> = ({
  name,
  width = 24,
  height = 24,
  color = 'black',
  className,
}) => {
  return (
    <ReactSVG
      src={`/static/icons/${name}.svg`}
      className={className}
      beforeInjection={(svg) => {
        svg.setAttribute('width', width.toString());
        svg.setAttribute('height', height.toString());
        svg.setAttribute('fill', color);
      }}
    />
  );
};

export default Icon;
