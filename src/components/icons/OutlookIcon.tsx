import { cn } from "@/utils/cn";
import React from "react";

const OutlookIcon = ({
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
      <path
        fill="#103262"
        d="M43.255,23.547l-6.81-3.967v11.594H44v-6.331C44,24.309,43.716,23.816,43.255,23.547z"
      />
      <path fill="#0084d7" d="M13,10h10v9H13V10z" />
      <path fill="#33afec" d="M23,10h10v9H23V10z" />
      <path fill="#54daff" d="M33,10h10v9H33V10z" />
      <path fill="#027ad4" d="M23,19h10v9H23V19z" />
      <path fill="#0553a4" d="M23,28h10v9H23V28z" />
      <path fill="#25a2e5" d="M33,19h10v9H33V19z" />
      <path fill="#0262b8" d="M33,28h10v9H33V28z" />
      <polygon
        points="13,37 43,37 43,24.238 28.99,32.238 13,24.238"
        opacity=".019"
      />
      <polygon
        points="13,37 43,37 43,24.476 28.99,32.476 13,24.476"
        opacity=".038"
      />
      <polygon
        points="13,37 43,37 43,24.714 28.99,32.714 13,24.714"
        opacity=".057"
      />
      <polygon
        points="13,37 43,37 43,24.952 28.99,32.952 13,24.952"
        opacity=".076"
      />
      <polygon
        points="13,37 43,37 43,25.19 28.99,33.19 13,25.19"
        opacity=".095"
      />
      <polygon
        points="13,37 43,37 43,25.429 28.99,33.429 13,25.429"
        opacity=".114"
      />
      <polygon
        points="13,37 43,37 43,25.667 28.99,33.667 13,25.667"
        opacity=".133"
      />
      <polygon
        points="13,37 43,37 43,25.905 28.99,33.905 13,25.905"
        opacity=".152"
      />
      <polygon
        points="13,37 43,37 43,26.143 28.99,34.143 13,26.143"
        opacity=".171"
      />
      <polygon
        points="13,37 43,37 43,26.381 28.99,34.381 13,26.381"
        opacity=".191"
      />
      <polygon
        points="13,37 43,37 43,26.619 28.99,34.619 13,26.619"
        opacity=".209"
      />
      <polygon
        points="13,37 43,37 43,26.857 28.99,34.857 13,26.857"
        opacity=".229"
      />
      <polygon
        points="13,37 43,37 43,27.095 28.99,35.095 13,27.095"
        opacity=".248"
      />
      <polygon
        points="13,37 43,37 43,27.333 28.99,35.333 13,27.333"
        opacity=".267"
      />
      <polygon
        points="13,37 43,37 43,27.571 28.99,35.571 13,27.571"
        opacity=".286"
      />
      <polygon
        points="13,37 43,37 43,27.81 28.99,35.81 13,27.81"
        opacity=".305"
      />
      <polygon
        points="13,37 43,37 43,28.048 28.99,36.048 13,28.048"
        opacity=".324"
      />
      <polygon
        points="13,37 43,37 43,28.286 28.99,36.286 13,28.286"
        opacity=".343"
      />
      <polygon
        points="13,37 43,37 43,28.524 28.99,36.524 13,28.524"
        opacity=".362"
      />
      <polygon
        points="13,37 43,37 43,28.762 28.99,36.762 13,28.762"
        opacity=".381"
      />
      <polygon points="13,37 43,37 43,29 28.99,37 13,29" opacity=".4" />
      <linearGradient
        id="Qf7015RosYe_HpjKeG0QTa_ut6gQeo5pNqf_gr1"
        x1="38.925"
        x2="32.286"
        y1="24.557"
        y2="36.024"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#31abec" />
        <stop offset={1} stopColor="#1582d5" />
      </linearGradient>
      <path
        fill="url(#Qf7015RosYe_HpjKeG0QTa_ut6gQeo5pNqf_gr1)"
        d="M15.441,42h26.563c1.104,0,1.999-0.889,2-1.994C44.007,35.485,44,24.843,44,24.843	s-0.007,0.222-1.751,1.212S14.744,41.566,14.744,41.566S14.978,42,15.441,42z"
      />
      <linearGradient
        id="Qf7015RosYe_HpjKeG0QTb_ut6gQeo5pNqf_gr2"
        x1="13.665"
        x2="41.285"
        y1="6.992"
        y2="9.074"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".042" stopColor="#076db4" />
        <stop offset=".85" stopColor="#0461af" />
      </linearGradient>
      <path
        fill="url(#Qf7015RosYe_HpjKeG0QTb_ut6gQeo5pNqf_gr2)"
        d="M43,10H13V8c0-1.105,0.895-2,2-2h26c1.105,0,2,0.895,2,2V10z"
      />
      <linearGradient
        id="Qf7015RosYe_HpjKeG0QTc_ut6gQeo5pNqf_gr3"
        x1="28.153"
        x2="23.638"
        y1="33.218"
        y2="41.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#33acee" />
        <stop offset={1} stopColor="#1b8edf" />
      </linearGradient>
      <path
        fill="url(#Qf7015RosYe_HpjKeG0QTc_ut6gQeo5pNqf_gr3)"
        d="M13,25v15c0,1.105,0.895,2,2,2h15h12.004c0.462,0,0.883-0.162,1.221-0.425L13,25z"
      />
      <path
        d="M21.319,13H13v24h8.319C23.352,37,25,35.352,25,33.319V16.681C25,14.648,23.352,13,21.319,13z"
        opacity=".05"
      />
      <path
        d="M21.213,36H13V13.333h8.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C24.333,34.603,22.936,36,21.213,36z"
        opacity=".07"
      />
      <path
        d="M21.106,35H13V13.667h8.106c1.414,0,2.56,1.146,2.56,2.56V32.44C23.667,33.854,22.52,35,21.106,35z"
        opacity=".09"
      />
      <linearGradient
        id="Qf7015RosYe_HpjKeG0QTd_ut6gQeo5pNqf_gr4"
        x1="3.53"
        x2="22.41"
        y1="14.53"
        y2="33.41"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1784d8" />
        <stop offset={1} stopColor="#0864c5" />
      </linearGradient>
      <path
        fill="url(#Qf7015RosYe_HpjKeG0QTd_ut6gQeo5pNqf_gr4)"
        d="M21,34H5c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C23,33.105,22.105,34,21,34z"
      />
      <path
        fill="#fff"
        d="M13,18.691c-3.111,0-4.985,2.377-4.985,5.309S9.882,29.309,13,29.309	c3.119,0,4.985-2.377,4.985-5.308C17.985,21.068,16.111,18.691,13,18.691z M13,27.517c-1.765,0-2.82-1.574-2.82-3.516	s1.06-3.516,2.82-3.516s2.821,1.575,2.821,3.516S14.764,27.517,13,27.517z"
      />
    </svg>
  );
};

export default OutlookIcon;
