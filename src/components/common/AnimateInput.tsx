"use client";
import { FC, useState } from "react";

interface IProps {
  className?: string;
  onBlurTitle: string;
  onFocusTitle: string;
  buttonTitle: string;
}

const AnimateInput: FC<IProps> = ({
  className,
  onBlurTitle,
  onFocusTitle,
  buttonTitle,
}) => {
  const [placeholder, setPlaceholder] = useState(onBlurTitle);
  return (
    <div className={className}>
      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-[var(--border-color)] p-[1.5px]">
        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#3CA2FA_20deg,transparent_120deg)]" />
        <div className="relative z-20 flex w-full rounded-[0.60rem] bg-[var(--background-color)] p-2">
          <input
            onFocus={() => setPlaceholder(onFocusTitle)}
            onBlur={() => setPlaceholder(onBlurTitle)}
            type="text"
            className="mr-2 pl-3 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 placeholder:text-[var(--placeholder-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
            placeholder={placeholder}
          />
          <span className="relative z-40 block rounded-lg border border-[var(--border-color)] bg-[var(--glass-color)] px-4 sm:px-8 py-3 text-center text-sm transition duration-200 hover:bg-[var(--glass-color-2)]">
            {buttonTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimateInput;
