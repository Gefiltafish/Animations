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
  return (
    <S.Card>
      <S.Image src={image} alt=":)"></S.Image>
      <S.ParagraphWrapper>
        <S.Paragraph>{name}</S.Paragraph>
        <S.Paragraph>🏢 {office}</S.Paragraph>
        {phone && <S.Paragraph>☎️ {phone}</S.Paragraph>}
      </S.ParagraphWrapper>
      <S.AnchorWrapper>
        {linkedin && <S.Anchor href={linkedin}>linkedIn</S.Anchor>}
        {github && <S.Anchor href={github}>github</S.Anchor>}
        {twitter && <S.Anchor href={twitter}>twitter</S.Anchor>}
      </S.AnchorWrapper>
    </S.Card>
  );
};

// const x = {
//   email: "agron.kabashi@tretton37.com"
// gitHub: "AgronKabashi"
// highlighted: false
// imagePortraitUrl: "https://i.1337co.de/profile/agron-kabashi"
// imageWallOfLeetUrl: "https://i.1337co.de/wallofleet/agron-kabashi"
// linkedIn: "/pub/agron-kabashi/54/6a8/4a6"
// mainText: "<p>I have been working in the software industry for over 10 years now, and even though the road has been bumpy, I don’t regret a single second of it! My experiences have been quite varied, from creating games to full blown web-based intranet platforms.</p><p>Because of this variation and these experiences I’ve found that I’ve acquired a thirst for front-end development and anything web related, which can range from mobile apps to web-based SaaS solutions. The fact that you can create ANYTHING with almost nothing is an exhilarating feeling. It’s one of the major reasons that keeps me going; the only limit is my imagination.</p><p>I absolutely love to travel and experience new cultures (and food!) when the opportunity presents itself. My goal in life is to visit as many places and experience as many different cultures as I possibly can. So far I can cross off Europe and half of Asia from my list, and I look forward to many more exciting adventures to come.</p>  "
// manager: "lotta.wennolf@tretton37.com"
// name: "Agron Kabashi"
// office: "Lund"
// orgUnit: "/Employees"
// phoneNumber: "+46725133736"
// published: true
// stackOverflow: null
// twitter: "_agronkabashi"
// }
