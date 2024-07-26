import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {}

const Plus = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path d="M12 5a1 1 0 0 0-1 1v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6a1 1 0 0 0-1-1Z"></path>
    </svg>
  );
};

export { Plus };
