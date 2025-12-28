import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700",
        className || "",
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
