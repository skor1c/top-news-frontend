import { toast } from '@/components/ui/use-toast';
import { fetchTopNews } from '@/features/top-news/top-news.service';
import { useCountry } from '@/hooks/use-country.hook';
import { TopNewsResponse } from '@/types/top-news.type';
import { useEffect, useState } from 'react';

const TopNewsPage = () => {
  const { countryCode } = useCountry();
  const [news, setNews] = useState<TopNewsResponse>();

  useEffect(() => {
    fetchTopNews(countryCode)
      .then((news) => {
        setNews(news);
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: 'Error retrieving news!',
          description: error.message,
        });
      });
  }, [countryCode]);

  return <div className="h-full">{JSON.stringify(news)}</div>;
};
export default TopNewsPage;
