import { CountryContextProps, CountryContext } from '@/providers/country.provider';
import { useContext } from 'react';

export const useCountry = (): CountryContextProps => {
  const context = useContext(CountryContext);

  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }

  return context;
};
