import React from "react";
import { LogoProps } from "../interfaces/InterfaceLogo";

export const Logo: React.FC<LogoProps> = ({ name }: LogoProps) => {
  return <div className="header__neto-logo">{name}</div>;
};
