import DebouncedInput from '@/components/debounced-input';
import { toast } from '@/components/ui/use-toast';
import NewsItem from '@/components/news-item';
import NewsSkeleton from '@/components/news-skeleton';
import { fetchBySearchTerm } from '@/services/news.service';
import { useCountry } from '@/hooks/use-country.hook';
import { Article } from '@/types/news.type';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const SearchNewsPage = () => {
  const { selectedCountry, countryCode } = useCountry();
  const [searchTerm, setSearchTerm] = useState('');

  const {
    isPending,
    error,
    data: news,
  } = useQuery<Article[]>({
    queryKey: [countryCode, searchTerm],
    queryFn: () => fetchBySearchTerm(countryCode, searchTerm),
  });

  if (error)
    toast({
      variant: 'destructive',
      title: 'Error retrieving news!',
      description: error.message,
    });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full md:w-[80vw]">
        <h2 className="text-center text-xl font-medium pb-4 md:text-2xl">
          Search top news from {selectedCountry?.country} by term:
        </h2>
        <DebouncedInput
          placeholder="Search term..."
          value={searchTerm}
          onChange={(value) => setSearchTerm(String(value))}
          className="text-xl"
        />
      </div>

      {isPending ? (
        <NewsSkeleton className="w-full pt-8" />
      ) : (
        <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3">
          {news
            ?.filter((article) => article.title !== '[Removed]')
            .map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
        </div>
      )}
    </div>
  );
};
export default SearchNewsPage;
