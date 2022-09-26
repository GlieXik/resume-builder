import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";
import { Box } from "../../utils/Box";
import styled from "styled-components";
import heroImg from "../../images/header/2x-header-img.jpg";

const Sh1 = styled("h1")`
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.xl};
  color: ${(p) => p.theme.colors.black};
`;
const Sh2 = styled("h2")`
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.text};
`;
const Img = styled("img")`
  width: 100%;

  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  background-size: cover;
`;
export const Hero = () => {
  return (
    <>
      <Img src={heroImg} alt="ruka" />
      <Box as="header" display="block" textAlign="center" p={3}>
        <Sh1> Генератор резюме</Sh1>
        <Sh2>Збільшіть шанси отримати роботу вашої мрії</Sh2>
        <PrimaryButton title="Створити своє резюме"></PrimaryButton>
      </Box>
    </>
  );
};
