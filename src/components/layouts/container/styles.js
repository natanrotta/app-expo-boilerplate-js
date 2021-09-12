import styled from "styled-components";

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['background'] };
`