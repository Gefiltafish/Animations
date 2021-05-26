import { useEffect } from 'react';
import { Ninja } from '../../types';

export const useFilterByLinkedin = (
  shouldFilter: boolean,
  filteredNinjas: Ninja[],
  originalNinjas: Ninja[],
  updateFn: (arr: Ninja[]) => void,
) => {
  useEffect(() => {
    if (shouldFilter) {
      const filteredArray = filteredNinjas.filter((ninja) => {
        return ninja.linkedIn !== null;
      });
      updateFn(filteredArray);
    }
    if (!shouldFilter) {
      updateFn(originalNinjas);
    }
  }, [shouldFilter]);
};
