import React from "react";
import { find, isUndefined } from "lodash";
import PropTypes from "prop-types";
import IconsMapper from "components/Icon/Icons";
import IconProps from "interfaces/props/Icon";
/**
 *
 * @param icon
 * @param rest
 * @returns {JSX.Element|null}
 * @constructor
 */
const Icon = ({ component, ...rest }: IconProps) :JSX.Element | null=> {
  const {component: Component }: any = find(IconsMapper, ({ label }: {label:string}) => label === component);

  if (isUndefined(Component)) {
    return null;
  }
  return <Component {...rest} />;
};


Icon.propTypes = {
  component: PropTypes.string.isRequired,
};
export default Icon;
