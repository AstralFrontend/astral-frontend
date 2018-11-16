import PropTypes from 'prop-types';
import React from 'react';
import { FormSpy } from 'react-final-form';

import { withStyles } from '@material-ui/core/styles';

const FormErrorAlert = ({ classes }) => (
  <FormSpy subscription={{ submitError: true }}>
    {({ submitError }) => <div className={classes.root}>{submitError}</div>}
  </FormSpy>
);

FormErrorAlert.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {
    margin: '12.5px 0',
    fontWeight: 300,
    color: '#c00000',
  },
})(FormErrorAlert);