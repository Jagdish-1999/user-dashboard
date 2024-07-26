import Image from "next/image";
import styled, { css } from "styled-components";

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => "styles" !== prop,
})<{
  styles: any;
}>`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  ${({ styles }) => styles}
`;

// Utility function to filter out custom props
const filterProps = (Component: React.ComponentType<any>) => {
  const FilteredComponent = ({
    animateIn,
    animateOut,
    ...props
  }: StyledImageProps) => <Component {...props} />;
  FilteredComponent.displayName = `Filtered${Component.displayName || Component.name}`;
  return FilteredComponent;
};

// Filter out custom props before passing to Image
const FilteredImage = filterProps(Image);

const StyledImage = styled(FilteredImage)<StyledImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: 0;
  transition: all 0.3s;

  ${({ animateOut }) =>
    animateOut &&
    css`
      animation: animateOut 0.5s ease-out forwards;

      @keyframes animateOut {
        from {
          transform: translateX(0px) scale(1);
          opacity: 1;
        }
        to {
          transform: translateX(-300px) scale(0);
          opacity: 0;
        }
      }
    `}

  ${({ animateIn }) =>
    animateIn &&
    css`
      animation: animateIn 0.5s ease-out forwards;

      @keyframes animateIn {
        from {
          transform: translateX(100px) scale(0.9);
          opacity: 0;
        }
        to {
          transform: translateX(0px) scale(1);
          opacity: 1;
        }
      }
    `}
`;

interface StyledImageProps {
  animateIn?: boolean;
  animateOut?: boolean;
}
interface ProductImageProps extends StyledImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

const ProductImage = ({
  animateIn,
  animateOut,
  ...props
}: ProductImageProps) => {
  return (
    <StyledImage {...props} animateIn={animateIn} animateOut={animateOut} />
  );
};

export { ProductImage, Container };
