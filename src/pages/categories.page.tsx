import { categories } from '@/constants/categories';
import NewsCategory from '@/components/news-category';
import { useCountry } from '@/hooks/use-country.hook';

const CategoriesPage = () => {
  const { selectedCountry } = useCountry();

  return (
    <>
      <h2 className="text-3xl">
        Top 5 News by categories from <strong>{selectedCountry?.country}</strong>
      </h2>
      <div>
        {categories.map((category) => (
          <NewsCategory category={category} key={category.key} />
        ))}
      </div>
    </>
  );
};
export default CategoriesPage;
