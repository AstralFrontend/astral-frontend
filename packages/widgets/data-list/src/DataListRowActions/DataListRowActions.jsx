import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      padding: theme.spacing(0, 4),
      backgroundColor: theme.palette.common.white,
    },
  }),
  { name: 'DataListRowActions' },
);

const DataListRowActions = ({ className, children, ...props }) => {
  const classes = useStyles();

  return (
    <FlexContainer
      alignItems="center"
      className={cn(className, classes.root)}
      {...props}
    >
      {children}
    </FlexContainer>
  );
};

DataListRowActions.defaultProps = {
  className: null,
};

DataListRowActions.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

export default DataListRowActions;