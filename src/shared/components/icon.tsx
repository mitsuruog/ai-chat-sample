"use client";

export * from "@fortawesome/free-regular-svg-icons";
import { faSpinner, faStop } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export { faSpinner, faStop };

export type IconProps = FontAwesomeIconProps;

const Icon = (props: IconProps) => <FontAwesomeIcon {...props} />;

export default Icon;
