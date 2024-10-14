import styled from "styled-components";

export const BarStyle = styled.div`
  height: 49px;
  color: #00634b;
  background-color: #dadd28;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
