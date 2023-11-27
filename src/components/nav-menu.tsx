import { links } from '@/constants/links';
import { NavLink } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '@/utils/cn';
import { useCountry } from '@/hooks/use-country.hook';
import { allCountries } from '@/utils/country';

const NavMenu = () => {
  const { countryCode, setCountryCode } = useCountry();

  return (
    <div className="py-2 px-4 border-b border-b-border w-full sticky flex justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.url}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  cn(navigationMenuTriggerStyle(), 'text-xl', isActive ? 'bg-accent text-accent-foreground' : '')
                }>
                {link.name}
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="flex justify-between">
        <NavigationMenuList>
          {allCountries.map((country) => (
            <NavigationMenuItem key={country.code}>
              <button
                onClick={() => setCountryCode(country.code)}
                className={cn(
                  navigationMenuTriggerStyle(),
                  countryCode === country.code ? 'bg-accent text-accent-foreground' : ''
                )}>
                {country.name}
              </button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default NavMenu;
