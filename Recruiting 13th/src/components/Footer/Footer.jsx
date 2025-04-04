import * as S from "./FooterStyles";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Section>
        <S.Title>Contact</S.Title>
        <S.Wrapper>
          <S.ContactItem
            onClick={() =>
              window.open("https://www.instagram.com/likelion_skhu/?hl=ko")
            }>
            <AiFillInstagram size={20} />
            <S.ContactItemTitle>Instagram </S.ContactItemTitle>
            <S.Id>@likelion_skhu</S.Id>
          </S.ContactItem>
          <S.ContactItem
            onClick={() =>
              window.open("https://github.com/LikeLion-13th-SKHU")
            }>
            <IoLogoGithub size={20} />
            <S.ContactItemTitle>Github</S.ContactItemTitle>
            <S.Id>@LikeLion-13th-SKHU</S.Id>
          </S.ContactItem>
        </S.Wrapper>
      </S.Section>
      <S.NameSection>
        <S.Title>Credits</S.Title>
        <S.Name>박예은&nbsp;&nbsp;&nbsp;백하윤</S.Name>
        <S.Name>양라윤&nbsp;&nbsp;&nbsp;윤현승</S.Name>
      </S.NameSection>
    </S.FooterContainer>
  );
};

export default Footer;
