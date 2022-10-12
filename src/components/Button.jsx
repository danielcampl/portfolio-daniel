import React from "react";
import PropTypes from "prop-types";

import "../CSS/Button.css";

export default function Button(props) {
  const { title } = props;
  return (
    <div className="contact-text">
      <button type="submit" value="Send message!">
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
}.isRequired;
