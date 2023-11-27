import { createContext, useState, useEffect } from 'react';
import { Country } from '@/types/country.type';
import { getCountryCodeFromLocalStorage, setCountryCodeToLocalStorage, allCountries } from '@/utils/country';

export type CountryContextProps = {
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: Country | undefined;
};

export const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider = ({ children }: { children: JSX.Element }) => {
  const [countryCode, setCountryCode] = useState<string>(getCountryCodeFromLocalStorage() ?? 'us');

  useEffect(() => {
    setCountryCodeToLocalStorage(countryCode);
  }, [countryCode]);

  const selectedCountry = allCountries.find((country) => country.code === countryCode);

  return (
    <CountryContext.Provider value={{ countryCode, setCountryCode, selectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
