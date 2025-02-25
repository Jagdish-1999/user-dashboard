import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {}

const WishlistIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 18 18"
      width="18"
      height="18"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M7.54118788,3.94746435 C6.26949528,2.67577175 4.21213798,2.66959186 2.94594467,3.93578517 C1.67975136,5.20197847 1.68593125,7.25933578 2.95762385,8.53102838 L7.66511771,13.2385222 C7.86037986,13.4337844 8.17696235,13.4337844 8.3722245,13.2385222 L13.0552592,8.55824992 C14.3185076,7.28794108 14.3145137,5.23634816 13.0425975,3.9644319 C11.7686258,2.69046028 9.71030505,2.68427942 8.44184829,3.95273618 L7.99458434,4.40086081 L7.54118788,3.94746435 Z"></path>
    </svg>
  );
};

export { WishlistIcon };
