/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import styles from '../table.module.scss';

const TableRow = ({ cells, classes, ...otherProps }) => {
  if (!cells || !cells.length) return null;

  return (
    <tr className={cs(styles.tableRow, classes.tableRow)} {...otherProps}>
      {cells.map((cell, idx) => {
        const cellValue = cell?.value ? cell.value : cell;
        const { isHeading = false, span = 1, value = '' } = cell;

        return isHeading ? (
          <th
            className={cs(
              styles.tableCell,
              styles.tableRowHeader,
              classes.tableCell,
              classes.tableRowHeader
            )}
            key={`th-${value}-${idx}`}
            rowSpan={span}
            scope="row"
          >
            {cellValue}
          </th>
        ) : (
          <td
            className={cs({
              [styles.tableCell]: !isHeading,
              [styles.tableRowHeader]: isHeading,
              [classes.tableCell]: !isHeading,
            })}
            key={`th-${value}-${idx}`}
          >
            {cellValue}
          </td>
        );
      })}
    </tr>
  );
};

TableRow.defaultProps = {
  classes: {
    tableCell: '',
    tableRow: '',
    tableRowHeader: '',
  },
};

TableRow.propTypes = {
  cells: PropTypes.arrayOf(
    PropTypes.shape({
      isHeading: PropTypes.bool,
      span: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ).isRequired,
  classes: PropTypes.shape({
    tableCell: PropTypes.string,
    tableRow: PropTypes.string,
    tableRowHeader: PropTypes.string,
  }),
};

export default TableRow;
