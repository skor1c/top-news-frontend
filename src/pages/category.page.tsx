import { toast } from '@/components/ui/use-toast';
import { categories } from '@/constants/categories';
import NewsItem from '@/components/news-item';
import NewsSkeleton from '@/components/news-skeleton';
import { fetchNewsByCategory } from '@/services/news.service';
import { useCountry } from '@/hooks/use-country.hook';
import { Article } from '@/types/news.type';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryKey } = useParams();
  const { countryCode, selectedCountry } = useCountry();

  const {
    isPending,
    error,
    data: news,
  } = useQuery<Article[]>({
    queryKey: [countryCode, categoryKey],
    queryFn: () => fetchNewsByCategory(countryCode, categoryKey!),
  });

  if (isPending) return <NewsSkeleton />;

  if (error)
    toast({
      variant: 'destructive',
      title: 'Error retrieving news!',
      description: error.message,
    });

  return (
    <>
      <h2 className="text-3xl">
        <strong>{categories.find((category) => category.key === categoryKey)?.name}</strong> category from{' '}
        <strong>{selectedCountry?.country}</strong>
      </h2>
      <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3">
        {news
          ?.filter((article) => article.title !== '[Removed]')
          .map((article) => (
            <NewsItem key={article.url} article={article} />
          ))}
      </div>
    </>
  );
};
export default CategoryPage;
