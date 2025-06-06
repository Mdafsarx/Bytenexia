import { cn } from "@/utils/cn";
import React from "react";

const AngularIcon = ({
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
      <linearGradient
        id="QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1"
        x1="19.369"
        x2="32.915"
        y1="6.256"
        y2="43.472"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#dfe9f2" />
        <stop offset=".391" stopColor="#d6e0e9" />
        <stop offset={1} stopColor="#bfc8d1" />
      </linearGradient>
      <path
        fill="url(#QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1)"
        d="M22.959,2.339L5.285,8.49c-1.333,0.464-2.163,1.795-1.992,3.197l2.828,23.187	c0.117,0.963,0.693,1.809,1.545,2.273l14.85,8.072c0.897,0.487,1.98,0.485,2.875-0.005l14.952-8.195	c0.847-0.464,1.419-1.309,1.536-2.268l2.826-23.174c0.172-1.41-0.668-2.747-2.013-3.204L24.91,2.332	C24.277,2.117,23.59,2.119,22.959,2.339z"
      />
      <linearGradient
        id="QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2"
        x1={24}
        x2={24}
        y1="2.152"
        y2="39.957"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f44f5a" />
        <stop offset=".443" stopColor="#ee3d4a" />
        <stop offset={1} stopColor="#e52030" />
      </linearGradient>
      <path
        fill="url(#QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2)"
        d="M42.62,12.14L39.96,34	c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23c-0.05,0-0.09-0.01-0.14-0.01c-0.27-0.01-0.54-0.08-0.8-0.22	L9.07,35.64c-0.56-0.31-0.95-0.88-1.03-1.52L5.38,12.24c-0.12-0.93,0.44-1.82,1.32-2.13l16.62-5.87c0.18-0.06,0.36-0.1,0.54-0.1	c0.05-0.01,0.09-0.01,0.14-0.01c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"
      />
      <path fill="#fff" d="M11.013,34h4.409L24,15.504V5.996L11.013,34z" />
      <path fill="#fff" d="M18,24h6v4h-6V24z" />
      <path
        fill="#b31523"
        d="M42.62,12.14L39.96,34c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23V4.13	c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"
      />
      <path fill="#bfc8d1" d="M24,6v9.508l8.578,18.496h4.409L24,6z" />
      <path fill="#bfc8d1" d="M24,24.004h6v4h-6V24.004z" />
      <path
        d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M25,1.467l-1.907,4.108L10.106,33.579L9.447,35h1.566h4.409h0.639l0.269-0.579L18.843,29H23l1,0.004h5.157 l2.514,5.421l0.269,0.579h0.639h4.409h1.566l-0.659-1.421L25,5.779V1.467L25,1.467z M21.626,23l2.373-5.117l2.375,5.121H25L24,23 H21.626L21.626,23z"
        opacity=".05"
      />
      <path
        d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M24.5,3.733l-0.954,2.052L10.559,33.79L10.23,34.5h0.783h4.409h0.319l0.134-0.29l2.648-5.71H23.5l0.5,0.004 h5.476l2.648,5.71l0.134,0.29h0.319h4.409h0.783l-0.329-0.71L24.5,5.89V3.733L24.5,3.733z M20.843,23.5l3.156-6.806l3.158,6.81 H24.5L24,23.5H20.843L20.843,23.5z"
        opacity=".07"
      />
    </svg>
  );
};

export default AngularIcon;
