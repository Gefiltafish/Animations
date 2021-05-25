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
  mainText: string;
  manager: string;
  name: string;
  office: string;
  orgUnit: string;
  phoneNumber: string;
  published: boolean;
  stackOverflow: null | string;
  twitter: string;
}
