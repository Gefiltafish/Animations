import * as S from './Card.styled';

interface NinjaCard {
  name: string;
  office: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  image: string;
  phone?: string;
}

export const Card = ({
  name,
  office,
  linkedin,
  github,
  twitter,
  image,
  phone,
}: NinjaCard) => {
  const concatLinkedInString = (adress: string) => {
    return 'https://www.linkedin.com/' + adress;
  };

  const concatGithubString = (adress: string) => {
    return 'https://github.com/' + adress;
  };

  const concatTwitterString = (adress: string) => {
    return 'https://twitter.com/' + adress;
  };

  return (
    <S.Card>
      <S.Image src={image} alt=":)"></S.Image>
      <S.ParagraphWrapper>
        <S.Paragraph>{name}</S.Paragraph>
        <S.Paragraph>🏢 {office}</S.Paragraph>
        {phone && <S.Paragraph>☎️ {phone}</S.Paragraph>}
      </S.ParagraphWrapper>
      <S.AnchorWrapper>
        {linkedin && (
          <S.Anchor href={concatLinkedInString(linkedin)}>LinkedIn</S.Anchor>
        )}
        {github && (
          <S.Anchor href={concatGithubString(github)}>Github</S.Anchor>
        )}
        {twitter && (
          <S.Anchor href={concatTwitterString(twitter)}>Twitter</S.Anchor>
        )}
      </S.AnchorWrapper>
    </S.Card>
  );
};
