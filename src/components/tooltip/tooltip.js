import React from 'react';
import './tooltip.css';

export const Tooltip = ({ title, info, link }) => (
  <div className="container">
    <div className="anchor">?</div>
    <div className="popover">
      <div className="tooltip-title">{title}</div>
      <div className="tooltip-info">{info}</div>
      <div className="tooltip-link">
        <a className="link" href={link}>
          Learn More
        </a>
      </div>
    </div>
  </div>
  );
