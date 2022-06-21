import styled from "styled-components";

export const HospitalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HospitalLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 50px 100px;
  @media screen and (max-width: 1024px) {
    padding: 50px 50px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

export const HospitalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    font-family: Forum;
    padding: 25px 0;
    font-weight: 400;
    line-height: 18px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    p {
      padding: 10px 0;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding-bottom: 30px;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 15px;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const HospitalRight = styled.div`
  width: 50%;
  height: 90%;
  max-width: 1000px;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 525px;
    padding: 30px 0 30px 0;
  }
  @media screen and (max-width: 425px) {
    height: 350px;
    width: 100%;
    padding: 15px;
  }
`;

const HospitalGallery = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HospitalBackground = styled.div`
  background-image: url(${(props) => props.pic});
  background-size: cover;
  width: 100%;
`;

export const HospitalGallery1 = styled(HospitalGallery)``;

export const HospitalGallery2 = styled(HospitalGallery)``;

export const HospitalWindow = styled(HospitalBackground)`
  height: 45%;
`;

export const HospitalGirl = styled(HospitalBackground)`
  height: 55%;
`;

export const HospitalDrink = styled(HospitalBackground)`
  height: 50%;
`;

export const HospitalBike = styled(HospitalBackground)`
  height: 50%;
`;
