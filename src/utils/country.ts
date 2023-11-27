import { Country } from '@/types/country.type';

export const allCountries: Country[] = [
  {
    code: 'us',
    name: 'US',
    country: 'United States',
  },
  {
    code: 'gb',
    name: 'GB',
    country: 'Great Britain',
  },
];

const COUNTRY_KEY = 'country';

export const setCountryCodeToLocalStorage = (countryKey: string) => {
  localStorage.setItem(COUNTRY_KEY, countryKey);
};

export const getCountryCodeFromLocalStorage = (): string | null => {
  return localStorage.getItem(COUNTRY_KEY);
};

export default { allCountries, setCountryCodeToLocalStorage, getCountryCodeFromLocalStorage };
