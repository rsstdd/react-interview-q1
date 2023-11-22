/* eslint-disable react/no-array-index-key, no-return-assign */
import * as React from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import { getWidth, calculateHeaderOffsetValues } from '../utils/utils';
import styles from '../table.module.scss';

const TableHead = ({ classes, columnHeading, ...otherProps }) => {
  let trRef = null;
  const [width, setWidth] = React.useState(getWidth());
  const [headingOffsetLeftValues, setHeadingOffsetLeftValues] = React.useState(
    []
  );

  React.useEffect(() => {
    setWidth(getWidth());
  }, []);

  React.useEffect(() => {
    setWidth(getWidth());
    setHeadingOffsetLeftValues([]);

    const handleResize = () => {
      setHeadingOffsetLeftValues([]);
      setWidth(getWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setWidth, setHeadingOffsetLeftValues]);

  React.useEffect(() => {
    if (trRef !== null) {
      setHeadingOffsetLeftValues(calculateHeaderOffsetValues(trRef));
    }
  }, [width, setHeadingOffsetLeftValues, trRef]);

  return (
    <>
      {columnHeading.length > 0 && (
        <thead
          className={cs(styles.tableHead, classes.tableHead)}
          {...otherProps}
        >
          <tr className={styles.tableHeadRow} ref={el => (trRef = el)}>
            {columnHeading.map((col, idx) => {
              const title = col?.value ? col.value : col;
              const { span = 1, isSticky = false } = col;
              const thStyles =
                isSticky && headingOffsetLeftValues[idx] !== undefined
                  ? { left: `${headingOffsetLeftValues[idx]}px` }
                  : null;

              return (
                <th
                  className={cs(styles.tableColHeader, classes.tableColHeader, {
                    [styles.tableColHeaderSticky]: isSticky,
                  })}
                  colSpan={span}
                  key={`th-${title}-${idx}`}
                  scope="col"
                  style={thStyles}
                >
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
      )}
    </>
  );
};

TableHead.defaultProps = {
  classes: {
    tableColHeader: '',
    tableHead: '',
  },
};

TableHead.propTypes = {
  columnHeading: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        colSpan: PropTypes.number,
        isSticky: PropTypes.bool,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      }),
    ])
  ).isRequired,
  classes: PropTypes.shape({
    tableColHeader: PropTypes.string,
    tableHead: PropTypes.string,
  }),
};

export default TableHead;
