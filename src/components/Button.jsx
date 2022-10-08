import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const { title } = props;
  return (
    <button type="submit" value="Send message!">
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
}.isRequired;
