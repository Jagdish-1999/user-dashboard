import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: inherit;

  img {
    width: 60px;
    height: 60px;
    transform: rotate3d(1, 1, 0, 3.142rad);
  }
`;

const Loading = () => {
  return (
    <Div>
      <Image
        src="/assets/tube-spinner.svg"
        alt="spinner"
        width={500}
        height={500}
        priority
      />
    </Div>
  );
};

export { Loading };
