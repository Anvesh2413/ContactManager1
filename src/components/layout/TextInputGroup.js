import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control form-control-lg"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
TextInputGroup.prototypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
TextInputGroup.defaultProps = {
  type: "text",
};
export default TextInputGroup;
