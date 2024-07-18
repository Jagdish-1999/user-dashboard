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
    width: 35px;
    height: 35px;
    transform: rotate3d(1, 1, 0, 3.142rad);
  }
`;

const Title = styled.h4`
  padding-top: 4px;
  color: ${(props) => props.theme.colors.loading_fg};
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
      <Title>Loading</Title>
    </Div>
  );
};

export { Loading };
