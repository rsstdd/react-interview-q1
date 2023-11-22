import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './field-label.module.scss';

/**
 * This component does not include an input, just a label that is
 * used in multiple components. Thus, no has-associated-control or
 * label-has-for
 */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
const FieldLabel = ({
  children,
  className,
  required,
  optionalMessage,
  ...otherProps
}) => {
  const optional =
    !required && optionalMessage ? (
      <span className={styles.labelOptional}>({optionalMessage})</span>
    ) : null;

  return (
    <label className={cs(styles.label, className)} {...otherProps}>
      {children} {optional}
    </label>
  );
};

FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool.isRequired,
  optionalMessage: PropTypes.string,
};

FieldLabel.defaultProps = {
  className: null,
  optionalMessage: null,
};

export default FieldLabel;
