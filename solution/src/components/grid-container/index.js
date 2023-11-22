import PropTypes from 'prop-types'
import React from 'react'

import styles from './grid-container.module.scss'

const GridContainer = ({ children }) => {
  return (
    <div className={styles.gridContainer}>
      {children}
    </div>
  )
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GridContainer
