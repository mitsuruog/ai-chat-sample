"use client";

import { faUser } from "@fortawesome/free-regular-svg-icons";
export * from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export { faUser };

export type IconProps = FontAwesomeIconProps;

const Icon = (props: IconProps) => <FontAwesomeIcon {...props} />;

export default Icon;
