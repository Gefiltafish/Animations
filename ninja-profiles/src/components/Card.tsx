import * as S from './Card.styled';

interface NinjaCard {
  name: string;
  office: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export const Card = ({
  name,
  office,
  linkedin,
  github,
  twitter,
}: NinjaCard) => {
  return (
    <S.Card>
      <span>{name}</span>
      <span>{office}</span>
      <span>{linkedin}</span>
      <span>{github}</span>
      <span>{twitter}</span>
    </S.Card>
  );
};
