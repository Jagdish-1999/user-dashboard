"use client";

import styled from "styled-components";

const NotFoundContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.bg};
`;

const NotFoundHeading = styled.div`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  padding: 8px 16px;
  border-right: 1px solid #64748b;
`;

const NotFoundDescription = styled.div`
  color: #64748b;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404</NotFoundHeading>
      <NotFoundDescription>This page could not be found</NotFoundDescription>
    </NotFoundContainer>
  );
};

export default NotFound;
