import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  //   onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return variant === "primary" ? (
    <button
      {...props}
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      {children}
    </button>
  ) : variant === "secondary" ? (
    <button
      {...props}
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      {children}
    </button>
  ) : (
    <button
      {...props}
      type="button"
      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      {children}
    </button>
  );
};

export default Button;
