import styled from 'styled-components';

export const SC_Row_Wrapper = styled.div<{
  gap?: number,
  justifyContent?: string,
  alignItems?: string,
  margin?: string,
  padding?: string,
}>`
  display: flex;
  flex-direction: row;

  padding: ${props => props.padding ? props.padding : '0px'};
  margin: ${props => props.margin ? props.margin : '0px'};
  
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  gap: ${props => props.gap ? `${props.gap}px` : '0px'};
`

export const SC_Column_Wrapper = styled.div<{
  gap?: number,
  justifyContent?: string,
  alignItems?: string,
  margin?: string,
  padding?: string,
}>`
  display: flex;
  flex-direction: column;
  
  padding: ${props => props.padding ? props.padding : '0px'};
  margin: ${props => props.margin ? props.margin : '0px'};

  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  gap: ${props => props.gap ? `${props.gap}px` : '0px'};
`