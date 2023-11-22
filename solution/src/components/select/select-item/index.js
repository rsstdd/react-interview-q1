import cs from 'classnames'
import PropTypes from 'prop-types'
import * as React from 'react'

import styles from './select-item.module.scss'

const SelectItem = ({ label, disabled, current }) => (
  <div
    aria-hidden={current}
    className={cs(styles.selectItem, {
      [ styles.selectItemDisabled ]: disabled,
      [ styles.selectItemCurrent ]: current,
    })}
  >
    {label}
  </div>
)

SelectItem.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  current: PropTypes.bool,
}

SelectItem.defaultProps = {
  current: false,
  disabled: false,
  label: null,
  swatch: null,
}

export default SelectItem
