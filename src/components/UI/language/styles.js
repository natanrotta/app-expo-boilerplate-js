import styled from 'styled-components'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Wrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-right: 10px;
  border: ${({ isSelected, theme }) => isSelected ? '2px solid ' + `${theme.colors['primary']}` : 'none' };
`

export const Flag = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`