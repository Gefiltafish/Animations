import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card';
import { CardWrapper } from './NinjaCardPage.styled';

export const NinjaCardPage = () => {
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

  const [ninjas, setNinjas] = useState<Ninja[]>([]);
  const [filterByName, setFilterByName] = useState<string>('Agron Kabashi');

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

  useEffect(() => {
    if (filterByName !== '') {
      const filteredArray = ninjas.filter((ninja) => {
        return ninja.name === filterByName;
      });
      if (filteredArray.length > 0) {
        setNinjas(filteredArray);
      }
    }
  }, [filterByName, ninjas]);

  return ninjas.length > 0 ? (
    <CardWrapper>
      {ninjas.map((ninja) => {
        return (
          <Card
            name={ninja.name}
            office={ninja.office}
            linkedin={ninja.linkedIn}
            github={ninja.gitHub}
            twitter={ninja.twitter}
            image={ninja.imagePortraitUrl}
            phone={ninja.phoneNumber}
          ></Card>
        );
      })}
    </CardWrapper>
  ) : (
    <p>loading...</p>
  );
};
