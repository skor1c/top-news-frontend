import { links } from '@/constants/links';
import { NavLink } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '@/lib/cn';
import { useCountry } from '@/hooks/use-country.hook';
import { allCountries } from '@/utils/country';

const NavMenu = () => {
  const { countryCode, setCountryCode } = useCountry();

  return (
    <div className="py-2 border-b border-b-border w-full sticky flex justify-between md:px-8 md:py-5">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.url}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  cn(
                    navigationMenuTriggerStyle(),
                    'md:text-xl text-sm',
                    isActive ? 'bg-accent text-accent-foreground' : ''
                  )
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
                  'md:text-base text-xs',
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
