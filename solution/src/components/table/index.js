import * as React from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import TableHead from './table-head/table-head';
import TableBody from './table-body/table-body';
import styles from './table.module.scss';

const Table = ({ classes, columnHeading, rows, ...otherProps }) => {
  const {
    tableHead,
    tableBody,
    tableCell,
    tableColHeader,
    tableRowHeader,
  } = classes;

  return (
    <div className={cs(styles.tableContainer, classes.tableContainer)}>
      <table className={cs(styles.table, classes.table)} {...otherProps}>
        <TableHead
          classes={{ tableHead, tableColHeader }}
          columnHeading={columnHeading}
        />
        <TableBody
          classes={{ tableBody, tableCell, tableRowHeader }}
          rows={rows}
        />
      </table>
    </div>
  );
};

Table.defaultProps = {
  classes: {
    table: '',
    tableBody: '',
    tableCell: '',
    tableColHeader: '',
    tableContainer: '',
    tableHead: '',
    tableRow: '',
    tableRowHeader: '',
  },
};

Table.propTypes = {
  /**
    Data to be displayed as columns.
    The value can be either a string or node.

    columnHeading: PropTypes.arrayOf(
      PropTypes.shape({
        isSticky: PropTypes.bool,
        span: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      })
    ).isRequired,
  */
  columnHeading: PropTypes.arrayOf(
    PropTypes.shape({
      isSticky: PropTypes.bool,
      span: PropTypes.number,
      value: PropTypes.node,
    })
  ).isRequired,
  /**
    Data to be displayed as rows.
    The value can be either a string or node.
    `isHeading` sets heading styles and can be omitted if using a rowspan.
    The headings are fixed.

    rows: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          isHeading: PropTypes.bool,
          span: PropTypes.number,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        })
      )
    ).isRequired,
   */
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        isHeading: PropTypes.bool,
        span: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      })
    )
  ).isRequired,
  /** Class Names to overwrite styling */
  classes: PropTypes.shape({
    table: PropTypes.string,
    tableBody: PropTypes.string,
    tableCell: PropTypes.string,
    tableColHeader: PropTypes.string,
    tableContainer: PropTypes.string,
    tableHead: PropTypes.string,
    tableRow: PropTypes.string,
    tableRowHeader: PropTypes.string,
  }),
};

export default Table;
