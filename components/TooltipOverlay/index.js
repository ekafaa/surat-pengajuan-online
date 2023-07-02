import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export function TooltipOverlay(props) {
  const { text, children, delay, placement } = props;
  return (
    <OverlayTrigger
      {...props}
      placement={placement}
      delay={delay}
      overlay={<Tooltip className="mytooltip">{text}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}
