import cs from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './field-input.module.scss'

const FieldInput = forwardRef(
  (
    {
      className,
      dropdown,
      status,
      type,
      ...otherProps
    },
    ref
  ) => {
    return (
      <div className={styles.tagWrapper}>
        <input
          {...otherProps}
          className={cs(styles.input, className, {
            [ styles.inputDisabled ]: otherProps.disabled,
            [ styles.inputError ]: status === 'error',
          })}
          aria-invalid={status === 'error'}
          ref={ref}
        />
      </div>
    )
  }
)

FieldInput.propTypes = {
  className: PropTypes.string,
  dropdown: PropTypes.bool,
  status: PropTypes.oneOf([ 'error' ]),
}

FieldInput.defaultProps = {
  className: undefined,
  dropdown: false,
  status: undefined,
}

export default FieldInput
