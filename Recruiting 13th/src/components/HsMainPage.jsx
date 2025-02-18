import styled from "styled-components";
import useCountdown from "../Hooks/useCountdown";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import media from "../styles/Media";

// MainPageContainer
const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  margin-top: 10rem;
  width: 80vw;
  height: 20%;
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 5rem;
  }
`;

// MainContent
const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

// MainPageTitle
const MainPageTitle = styled.div`
  font-size: 6vw;
  font-weight: bolder;
  line-height: 6.5vw;
  text-align: start;
  flex: 1;

  @media (max-width: 1024px) {
    font-size: 8rem;
    line-height: 5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

// MainPageSubTitle
const MainPageSubTitle = styled.div`
  font-size: 1.2rem;
  height: 3.7rem;
  margin-left: 5px;
  font-weight: bold;
`;

// MainPageUnivName
const MainPageUnivName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

// ApplyContainer
const ApplyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: -14rem;
  flex-wrap: wrap;
  justify-content: center;
  ${media.mobile} {
    margin-left: 0;
    font-size: 13px;
  }
`;

// ApplyDiv
const ApplyDiv = styled.div`
  display: flex;
  border-radius: 1rem;
  width: 18vw;
  height: 6vw;
  background-color: #20be37;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1aa32e;
  }

  @media (max-width: 768px) {
    width: 50vw;
    height: 12vw;
  }
`;

// ApplyDivLetter
const ApplyDivLetter = styled.span`
  color: white;
  font-size: 2rem; /* Slightly larger font for clarity */
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// Timer
const Timer = styled.div`
  background-color: #ff7710;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 9rem;
  height: 3rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  font-variant-numeric: tabular-nums;

  @media (max-width: 768px) {
    width: 8rem;
    font-size: 0.9rem;
  }
`;

// MainImage
const MainImage = styled.img`
  width: 15vw; /* Adjusted to vw */
  height: 15vw;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 12rem;
    height: 12rem;
  }
  @media (max-width: 768px) {
    width: 25vw; /* Adjusted for smaller screen */
    height: 25vw;
  }
`;

const HsMainPage = () => {
  const navigate = useNavigate();
  const targetDate = useMemo(() => new Date("2025-02-28T23:59:59"), []);
  const timeLeft = useCountdown(targetDate);

  return (
    <MainPageContainer>
      <MainContent>
        <MainPageTitle>
          <MainPageSubTitle>Growl To Growth</MainPageSubTitle>
          멋쟁이
          <br /> 사자처럼
          <MainPageUnivName>SKHU</MainPageUnivName>
        </MainPageTitle>
        <MainImage src="/images/3D사자 1.png" alt="사진없음" />
      </MainContent>

      <ApplyContainer>
        <ApplyDiv onClick={() => navigate("/")}>
          <ApplyDivLetter>13기 지원하기!</ApplyDivLetter>
        </ApplyDiv>
        <Timer>
          {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </Timer>
      </ApplyContainer>
    </MainPageContainer>
  );
};

export default HsMainPage;
