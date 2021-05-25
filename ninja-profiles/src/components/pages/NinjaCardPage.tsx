import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card';
import { CardWrapper } from './NinjaCardPage.styled';

export const NinjaCardPage = () => {
  const [ninjas, setNinjas] = useState();

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

  return (
    <CardWrapper>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardWrapper>
  );
};

const x = {
  header:
    'Authorization: api-key 14:2021-05-21:sandra.aberg@tretton37.com 35d920c2863fd45af8ea4bcf18b71d1619cbdd1355194499a1276a4bb48a7616',
  exampleCurl:
    "curl --location -v 'http://api-dev.1337co.de/v3/statistics' --header 'Authorization: api-key 14:2021-05-21:sandra.aberg@tretton37.com 35d920c2863fd45af8ea4bcf18b71d1619cbdd1355194499a1276a4bb48a7616'",
};
