import React from 'react';
import './form_input_styles.scss';


const FormInput = ({ handleChange, label, ...anyotherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...anyotherProps} />
    {label ? (
      <label
        className={`${
          anyotherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
