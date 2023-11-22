import PropTypes from 'prop-types'
import React from 'react'
import FieldLabel from '../field/field-label/index'

import styles from './select.module.scss'

const Select = ({ className, label = '', value = [], options = [], onChange }) => {
  return (
    <div className={className}>
      <FieldLabel
        className={styles?.label}
        htmlFor={label}
      >
        {label}
      </FieldLabel>
      <select
        className={styles.select}
        required
        id={label}
        name={label}
        value={value}
        onChange={onChange}
      >
        <option value="">Please choose an option</option>
        {options.length > 0 ? options.map((option, idx) => (
          <option key={idx} value={option}>{option}</option>
        )) : null}
      </select>
    </div>
  )
}


Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.shape('string'),
}

Select.defaultProps = {
}

export default Select
