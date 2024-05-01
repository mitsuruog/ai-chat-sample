"use client";

export * from "@fortawesome/free-regular-svg-icons";
import {
  faSpinner,
  faStop,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export { faSpinner, faStop, faChevronDown };

export type IconProps = FontAwesomeIconProps;

const Icon = (props: IconProps) => <FontAwesomeIcon {...props} />;

export default Icon;
