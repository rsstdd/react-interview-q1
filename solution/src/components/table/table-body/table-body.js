import * as React from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import TableRow from '../table-row/table-row';
import styles from '../table.module.scss';

const TableBody = ({ classes, rows, ...otherProps }) => {
  if (!rows || !rows.length) return null;
  const { tableBody, tableCell, tableRow, tableRowHeader } = classes;

  return (
    <tbody className={cs(styles.tableBody, tableBody)} {...otherProps}>
      {rows.map((row, idx) => (
        <TableRow
          cells={row}
          classes={{ tableCell, tableRow, tableRowHeader }}
          // eslint-disable-next-line react/no-array-index-key
          key={`table-row-${idx}`}
        />
      ))}
    </tbody>
  );
};

TableBody.defaultProps = {
  classes: {
    tableBody: '',
    tableCell: '',
    tableRow: '',
    tableRowHeader: '',
  },
};

TableBody.propTypes = {
  classes: PropTypes.shape({
    tableBody: PropTypes.string,
    tableCell: PropTypes.string,
    tableRow: PropTypes.string,
    tableRowHeader: PropTypes.string,
  }),
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        isHeading: PropTypes.bool,
        span: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      })
    )
  ).isRequired,
};

export default TableBody;
