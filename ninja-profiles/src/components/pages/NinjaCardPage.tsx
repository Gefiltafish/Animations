import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card';
import * as S from './NinjaCardPage.styled';

export const NinjaCardPage = () => {
  interface Ninja {
    email: string;
    gitHub: string | null;
    highlighted: boolean;
    imagePortraitUrl: string;
    imageWallOfLeetUrl: string;
    linkedIn: string | null;
    mainText: string;
    manager: string;
    name: string;
    office: string;
    orgUnit: string;
    phoneNumber: string;
    published: boolean;
    stackOverflow: string | null;
    twitter: string | null;
  }

  const [ninjas, setNinjas] = useState<Ninja[]>([]);
  const [filteredNinjas, setFilteredNinjas] = useState<Ninja[]>([]);
  const [filterByName, setFilterByName] = useState<string>('Search by name');
  const [filterByGithub, setFilterByGithub] = useState<boolean>(false);
  const [filterByLinkedin, setFilterByLinkedin] = useState<boolean>(false);
  const [filterByTwitter, setFilterByTwitter] = useState<boolean>(false);
  const [filterByOffice, setFilterByOffice] =
    useState<string>('Search by office');

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
        setFilteredNinjas(filteredArray);
      } else {
        setFilteredNinjas(ninjas);
      }
    }
  }, [filterByName, ninjas]);

  useEffect(() => {
    if (filterByOffice !== '') {
      const filteredArray = ninjas.filter((ninja) => {
        return ninja.office === filterByOffice;
      });
      if (filteredArray.length > 0) {
        setFilteredNinjas(filteredArray);
      } else {
        setFilteredNinjas(ninjas);
      }
    }
  }, [filterByOffice, ninjas]);

  const handleChangeNameText = (input: string) => {
    setFilterByName(input);
  };
  const handleChangeOfficeText = (input: string) => {
    setFilterByOffice(input);
  };

  useEffect(() => {
    if (filterByGithub) {
      const filteredArray = filteredNinjas.filter((ninja) => {
        return ninja.gitHub !== null;
      });
      setFilteredNinjas(filteredArray);
    }
    if (!filterByGithub) {
      setFilteredNinjas(ninjas);
    }
  }, [filterByGithub]);

  useEffect(() => {
    if (filterByLinkedin) {
      const filteredArray = filteredNinjas.filter((ninja) => {
        return ninja.linkedIn !== null;
      });
      setFilteredNinjas(filteredArray);
    }
    if (!filterByLinkedin) {
      setFilteredNinjas(ninjas);
    }
  }, [filterByLinkedin]);

  useEffect(() => {
    if (filterByTwitter) {
      const filteredArray = filteredNinjas.filter((ninja) => {
        return ninja.twitter !== null;
      });
      setFilteredNinjas(filteredArray);
    }
    if (!filterByTwitter) {
      setFilteredNinjas(ninjas);
    }
  }, [filterByTwitter]);

  return filteredNinjas.length > 0 ? (
    <>
      <S.HeaderWrapper>
        <S.Input
          placeholder="Search by name"
          onChange={(e) => handleChangeNameText(e.currentTarget.value)}
          value={filterByName}
        ></S.Input>
        <S.Input
          placeholder="Search by office"
          onChange={(e) => handleChangeOfficeText(e.currentTarget.value)}
          value={filterByOffice}
        ></S.Input>
        <S.CheckboxRow>
          <S.CheckboxWrapper>
            <S.CheckboxText>Filter by Github</S.CheckboxText>
            <S.Checkbox
              type="checkbox"
              onChange={() => setFilterByGithub(!filterByGithub)}
            ></S.Checkbox>
          </S.CheckboxWrapper>
          <S.CheckboxWrapper>
            <S.CheckboxText>Filter by LinkedIn</S.CheckboxText>
            <S.Checkbox
              type="checkbox"
              onChange={() => setFilterByLinkedin(!filterByLinkedin)}
            ></S.Checkbox>
          </S.CheckboxWrapper>
          <S.CheckboxWrapper>
            <S.CheckboxText>Filter by Twitter</S.CheckboxText>
            <S.Checkbox
              type="checkbox"
              onChange={() => setFilterByTwitter(!filterByTwitter)}
            ></S.Checkbox>
          </S.CheckboxWrapper>
        </S.CheckboxRow>
      </S.HeaderWrapper>
      <S.CardWrapper>
        {filteredNinjas.map((ninja, i) => {
          return (
            <Card
              key={i}
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
      </S.CardWrapper>
    </>
  ) : (
    <p>loading...</p>
  );
};
