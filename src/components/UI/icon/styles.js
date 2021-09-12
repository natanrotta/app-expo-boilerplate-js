import styled from 'styled-components';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const IconStyled = styled(FeatherIcon)`
  color: ${({ color, theme }) => color && theme.colors[color] };
  font-size: ${({ size }) => `${size}px` };
`
