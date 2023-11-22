import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './field-hint.module.scss';

const FieldHint = ({ children, className, status, ...otherProps }) => {
  if (!children) {
    return null;
  }

  return (
    <div
      className={cs(styles.hint, className, {
        [styles.hintSuccess]: status === 'success',
        [styles.hintWarning]: status === 'warning',
        [styles.hintError]: status === 'error',
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};

FieldHint.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status: PropTypes.oneOf(['success', 'warning', 'error']),
};

FieldHint.defaultProps = {
  children: null,
  className: null,
  status: null,
};

export default FieldHint;
