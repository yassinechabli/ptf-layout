import LinearProgress from "@mui/material/LinearProgress";
import Proptypes from "prop-types";
import React from "react";
import ProgressBarProps from "interfaces/props/IProgressBar";

/**
 *
 * @param color
 * @param style
 * @constructor
 */
const ProgressBar = ({ color, style }: ProgressBarProps) => (
    <div className={style}>
      <LinearProgress color={color} />
    </div>
  );

ProgressBar.propTypes = {
  color: Proptypes.string,
  style: Proptypes.string,
};

ProgressBar.defaultProps = {
  color: "secondary",
  style: "",
};

export default ProgressBar;
