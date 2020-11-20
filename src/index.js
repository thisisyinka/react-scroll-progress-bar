import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const scrollStyle = (
  width,
  height = "3",
  bgcolor = "#F43059",
  duration = "1"
) => ({
  margin: 0,
  padding: 0,
  position: "absolute",
  bottom: "-1px",
  right: 0,
  left: 0,
  zIndex: "99",
  backgroundColor: `${bgcolor}`,
  height: `${height}px`,
  width: `${width}`,
  transitionProperty: "width",
  transitionDuration: `${duration}s`,
  transitionTimingFunction: `ease-out`,
});

const ProgressBar = ({ height, bgcolor, duration }) => {
  const [width, setWidth] = useState(0);

  const onScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setWidth(height > 0 ? `${scrolled}%` : 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return <div style={scrollStyle(width, height, bgcolor, duration)} />;
};

ProgressBar.propTypes = {
  height: PropTypes.number,
  duration: PropTypes.number,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;
