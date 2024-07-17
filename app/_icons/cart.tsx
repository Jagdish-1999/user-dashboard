import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {}

const CartIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 18 18"
      viewBox="-1 0 20 20"
      width="18"
      height="18"
      {...props}
    >
      <path
        // fill="currentColor"
        d="M9,1C7.4,1,6,2.3,6,4v2H4L3,17h12L14,6h-2V4C12,2.3,10.7,1,9,1z M11,6H7V4c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2V6z"
      ></path>
    </svg>
  );
};

export { CartIcon };
