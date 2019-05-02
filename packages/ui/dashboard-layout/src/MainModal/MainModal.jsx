import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

const TRANSITION_DURATION = 400;

const DashboardLayoutMainModal = ({
  classes, className, title, children, history,
}) => {
  const [transitionIn, setTransitionIn] = useState(true);

  const defaultStyle = {
    transition: `right ${TRANSITION_DURATION}ms ease-in-out`,
    right: '-100%',
  };

  const transitionStyles = {
    entered: { right: 0 },
    exited: { right: '-100%' },
  };

  const handleBackButtonClick = () => {
    setTransitionIn(false);
    setTimeout(() => history.goBack(), TRANSITION_DURATION);
  };

  return (
    <Transition in={transitionIn} appear>
      {state => (
        <div className={cn(classes.root)} style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <div className={classes.header}>
            <IconButton className={classes.icon} onClick={handleBackButtonClick}>
              <BackIcon />
            </IconButton>
            <h3>{title}</h3>
          </div>
          <div className={cn(classes.container, className)}>{children}</div>
        </div>
      )}
    </Transition>
  );
};

DashboardLayoutMainModal.defaultProps = {
  className: null,
};

DashboardLayoutMainModal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withStyles(
  theme => ({
    root: {
      position: 'fixed',
      top: 0,
      height: '100%',
      width: '40%',
      minWidth: '550px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0px 4px 56px rgba(0, 0, 0, 0.1)',
      borderTop: `1px solid ${theme.palette.grey[100]}`,
      overflowY: 'auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '25px 25px 0',
    },
    icon: {
      padding: 0,
      marginRight: '15px',
    },
    container: {
      padding: '0 25px',
      height: '100%',
    },
  }),
  { name: 'DashboardLayoutMainModal' },
)(withRouter(DashboardLayoutMainModal));