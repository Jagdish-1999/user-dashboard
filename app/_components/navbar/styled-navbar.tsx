import { Profile } from "@/app/_icons/profile";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

const RootNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  color: ${(props) => props.theme.colors.fg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding-inline: 8.5rem;
  height: 60px;
  backdrop-filter: blur(18px);
  transition: all 0.3s;

  @media screen and (max-width: 1250px) {
    padding-inline: 4.5rem;
  }
  @media screen and (max-width: 850px) {
    padding-inline: 2.5rem;
  }
`;

const NavLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Links = styled.div<{}>`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["isActive", "underline"].includes(prop),
})<{ underline?: string; isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-out;
  text-underline-offset: 2px;
  position: relative;

  ${({ underline }) =>
    underline === "false"
      ? ""
      : css`
          &:hover {
            text-decoration: underline;
            text-underline-offset: 6px;
          }
        `}
  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: underline;
      text-underline-offset: 6px;
    `}
`;

const Count = styled.div`
  min-width: 18px;
  min-height: 18px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -8px;
  right: -16px;
  position: absolute;
  background-color: ${(props) => props.theme.colors.nav_count_bg};
  color: ${(props) => props.theme.colors.nav_count_fg};
  font-size: 12px;
  font-weight: 600;
  border-radius: 100%;
  backdrop-filter: blur(4px);
`;

const StyledImage = styled(Image)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.colors.fg};
`;

const ProfileIcon = styled(Profile)`
  border-radius: 50%;
  padding: var(--padding-2);
  border: 1px solid ${(props) => props.theme.colors.card_border};
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  width: 35px;
  height: 35px;
`;

export {
  RootNavbar,
  NavLogoContainer,
  Links,
  StyledLink,
  Count,
  StyledImage,
  ProfileIcon,
  Avatar,
};
