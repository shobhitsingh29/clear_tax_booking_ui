import Styled from "styled-components";

export const Container = Styled.div`
  background:white;
  width:100vw;
  height:100vh;
    
`;

export const SeatButton = Styled.button`
  background: ${props => props.isSelected ? 'red':'whitesmoke'};
    
`;
