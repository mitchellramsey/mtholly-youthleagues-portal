// Imports
import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

// CSS
import "../LogInForm/loginform.css";


// Creating the form text field group
// ---------------------------------------------------------------------------------------
const TextFieldGroup = ({ id, value, className, label, errors, type, onChange, placeholder, name, checkUser, field }) => {
    return (
      <div className={classnames("form-group text-center", { "has-error": errors })}>
        <h4><label className="control-label">{label}</label></h4>
            <input
                onBlur={checkUser}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type={type}
                name={field}
                className={className}
                id={id}
            />
        {errors && <span className="help-block">{errors}</span>}
        </div>  
      );
  }

  // -------------------------------------------------------------------------
  // Setting PropTypes
  TextFieldGroup.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkUser: PropTypes.func
  }
  
  TextFieldGroup.defaultProps = {
    type: "text"
  }

  // ------------------------------------------------------------------------------
  
  export default TextFieldGroup;