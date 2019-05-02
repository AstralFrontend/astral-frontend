import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@astral-frontend/styles';

const OrganizationSelectorNotFoundPlaceholder = ({
  classes,
  className,
  name,
  addLinkHref,
  ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    <Link className={classes.link} to={addLinkHref}>добавить огранизацию</Link>
  </div>
);
OrganizationSelectorNotFoundPlaceholder.defaultProps = {
  className: null,
};

OrganizationSelectorNotFoundPlaceholder.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  addLinkHref: PropTypes.string.isRequired,
};

export default withStyles({
  root: {},
  link: {},
})(OrganizationSelectorNotFoundPlaceholder);