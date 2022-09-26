import styled from "styled-components";

export const SPrimaryButton = styled("button")`
  background: ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radii.md};
  border: ${(p) => p.theme.borders.none};
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.white};
  padding: ${(p) => p.theme.space[3]}px ${(p) => p.theme.space[4]}px;
  margin: ${(p) => p.theme.space[2]}px;

  :hover,
  :focus {
    background: ${(p) => p.theme.colors.hover};
  }
`;
