import cs from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import styles from './button.module.scss'

const Button = forwardRef(
  (
    {
      block,
      mobileBlock,
      children,
      className,
      disabled,
      kind,
      tag,
      type,
      ...otherProps
    },
    ref
  ) => {
    return (
      <button
        className={cs(styles.button, 'text-button', className, {
          [ styles.buttonPrimary ]: kind === 'primary',
          [ styles.buttonMobileBlock ]: mobileBlock,
        })}
        disabled={disabled}
        type={type}
        ref={ref}
        {...otherProps}
      >
        {children}
      </button>
    )
  }
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  mobileBlock: false,
  className: null,
  disabled: false,
}

export default Button
