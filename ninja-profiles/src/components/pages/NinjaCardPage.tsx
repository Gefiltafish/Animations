import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card';
import { CardWrapper } from './NinjaCardPage.styled';

export const NinjaCardPage = () => {
  const [ninjas, setNinjas] = useState<Ninja[]>([]);

  useEffect(() => {
    axios
      .get('https://api.1337co.de/v3/employees', {
        headers: {
          Authorization:
            'api-key 14:2021-05-21:sandra.aberg@tretton37.com 35d920c2863fd45af8ea4bcf18b71d1619cbdd1355194499a1276a4bb48a7616',
        },
      })
      .then((res) => {
        setNinjas(res.data);
      });
  }, []);

  if (ninjas !== undefined) {
    console.log(ninjas);
  }

  return ninjas.length > 0 ? (
    <CardWrapper>
      {ninjas.map((ninja) => {
        return <Card></Card>;
      })}
    </CardWrapper>
  ) : (
    <p>loading...</p>
  );
};

interface Ninja {
  email: string;
  gitHub: string;
  highlighted: boolean;
  imagePortraitUrl: string;
  imageWallOfLeetUrl: string;
  linkedIn: string;
  mainText: '<p>I have been working in the software industry for over 10 years now, and even though the road has been bumpy, I don’t regret a single second of it! My experiences have been quite varied, from creating games to full blown web-based intranet platforms.</p><p>Because of this variation and these experiences I’ve found that I’ve acquired a thirst for front-end development and anything web related, which can range from mobile apps to web-based SaaS solutions. The fact that you can create ANYTHING with almost nothing is an exhilarating feeling. It’s one of the major reasons that keeps me going; the only limit is my imagination.</p><p>I absolutely love to travel and experience new cultures (and food!) when the opportunity presents itself. My goal in life is to visit as many places and experience as many different cultures as I possibly can. So far I can cross off Europe and half of Asia from my list, and I look forward to many more exciting adventures to come.</p>  ';
  manager: string;
  name: string;
  office: string;
  orgUnit: string;
  phoneNumber: string;
  published: boolean;
  stackOverflow: null | string;
  twitter: string;
}
