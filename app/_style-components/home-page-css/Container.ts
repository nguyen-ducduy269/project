import styled from "styled-components";

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  @media only screen and (max-width: 1350px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1199px) {
    width: 970px;
  }

  @media only screen and (max-width: 991px) {
    width: 750px;
  }

  @media only screen and (max-width: 767px) {
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
