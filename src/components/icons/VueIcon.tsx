import { cn } from "@/utils/cn";
import React from "react";

const VueIcon = ({
  className,
  isAnimation = true,
  reSize,
}: {
  className?: string;
  isAnimation?: boolean;
  reSize?: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={reSize ? "80px" : "75px"}
      height={reSize ? "80px" : "75px"}
      viewBox="0 0 48 48"
      className={cn(isAnimation && "social-icon-animation", className)}
    >
      <polygon
        fill="#81c784"
        points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
      />
      <polygon
        fill="#455a64"
        points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
      />
    </svg>
  );
};

export default VueIcon;
