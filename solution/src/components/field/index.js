import cs from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import FieldHint from './field-hint'
import FieldInput from './field-input'
import FieldLabel from './field-label'

import styles from './field.module.scss'

const Field = (
  {
    className,
    classes,
    disabled,
    status,
    hideLabel,
    hint,
    id,
    iframeField,
    name,
    children,
    required,
    ...otherProps
  }) => {
  const labelId = `${id}-label`
  const hintId = `${id}-hint`

  return (
    <div className={className}>
      <FieldLabel
        className={cs(classes?.label, {
          'hidden-visually': hideLabel,
        })}
        htmlFor={id}
        id={labelId}
        required={required}
      >
        {`${children} `}
      </FieldLabel>
      <FieldInput
        aria-labelledby={labelId}
        id={id}
        aria-disabled={disabled}
        aria-describedby={hint ? hintId : null}
        required={iframeField ? null : required}
        status={status}
        className={cs(classes?.input, {
          [ styles.iframeField ]: iframeField,
        })}
        {...otherProps}
      />
      <FieldHint className={classes?.hint} id={hintId} status={status}>
        {hint}
      </FieldHint>
    </div>
  )
}

Field.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.string,
    hint: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  status: PropTypes.oneOf([ 'success', 'error' ]),
  hideLabel: PropTypes.bool,
  /** Hint text for validation messages */
  hint: PropTypes.node,
  id: PropTypes.string.isRequired,
  /**
   * Flag to render an empty div capable of containing an iframe
   * for third party payment integrations.
   */
  iframeField: PropTypes.bool,
  name: PropTypes.string,
  /** The field's label */
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  /** Localized strings */
  messages: PropTypes.shape({
    /** Label for optional message next to field label: "Optional" */
    optional: PropTypes.string,
    /** Label for show/hide password toggle: "Show password" */
    passwordToggle: PropTypes.string,
  }),
}

Field.defaultProps = {
  className: null,
  classes: null,
  disabled: false,
  hideLabel: false,
  hint: null,
  iframeField: false,
  messages: {},
  name: null,
  required: true,
  status: null,
}

export default Field
