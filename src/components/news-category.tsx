import { toast } from '@/components/ui/use-toast';
import { useCountry } from '@/hooks/use-country.hook';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import NewsSkeleton from './news-skeleton';
import { fetchNewsByCategory } from '../services/news.service';
import { Article } from '@/types/news.type';
import NewsItem from './news-item';
import CarouselComponent from '@/components/carousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCollapse } from 'react-collapsed';
import { MinusCircle, PlusCircle } from 'lucide-react';

type Props = {
  category: {
    key: string;
    name: string;
  };
};

const NewsCategory: FC<Props> = ({ category }) => {
  const { countryCode } = useCountry();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ defaultExpanded: true });

  const {
    isPending,
    error,
    data: news,
  } = useQuery<Article[]>({
    queryKey: [countryCode, category.key],
    queryFn: () => fetchNewsByCategory(countryCode, category.key, 5),
  });

  if (isPending) return <NewsSkeleton />;

  if (error)
    toast({
      variant: 'destructive',
      title: 'Error retrieving news!',
      description: error.message,
    });

  return (
    <div className="pt-8">
      <div {...getToggleProps()} className="flex justify-between items-center bg-[#fafafa] rounded-md p-2">
        <Link to={'/categories/' + category.key}>
          <Button variant="link" className="text-2xl font-medium">
            {category.name}
          </Button>
        </Link>
        <div>
          <Button variant="ghost"> {isExpanded ? <MinusCircle /> : <PlusCircle />}</Button>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="bg-[#fafafa] px-4 pb-4 rounded-md">
          <CarouselComponent>
            {news
              ?.filter((article) => article.title !== '[Removed]')
              .map((article) => (
                <NewsItem key={article.url} article={article} className="h-full lg:mr-4" />
              ))}
          </CarouselComponent>
        </div>
      </div>
    </div>
  );
};
export default NewsCategory;
