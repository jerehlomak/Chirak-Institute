import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ count, rate, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rate >= index) {
      return color.filled;
    }
    return color.unfilled;
  };
  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className='cursor-pointer'
          icon={faStar}
          onClick={() => onRating(idx)}
          style={{
            color: getColor(idx),
            fontSize: "11px",
            paddingLeft: "10px",
            paddingBottom: "2px",
          }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rate, hoverRating]);
  return <div>{starRating}</div>;
};

Rating.propTypes = {
  count: PropTypes.number,
  rate: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rating.defaultProps = {
  count: 5,
  rate: 4,
  color: {
    filled: "#f5eb3b",
    unfilled: "#dcdcdc",
  },
};
export default Rating;
