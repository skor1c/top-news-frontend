import { Article } from '@/types/news.type';
import { FC, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/cn';

type Props = {
  article: Article;
  className?: string | undefined;
};

const NewsItem: FC<Props> = ({ article, className }) => {
  const [showFullArticle, setShowFullArticle] = useState<boolean>(false);

  return (
    <>
      <Card className={cn('flex flex-col justify-between', className)}>
        <CardHeader>
          <CardTitle>{article.title}</CardTitle>
          <CardContent className="py-1 px-0">
            <img
              src={article.urlToImage ?? '/images/placeholder.jpg'}
              alt={article.title}
              className="h-52 w-full object-cover md:h-72"
            />
          </CardContent>
          <CardDescription>{article.description}</CardDescription>
        </CardHeader>
        <CardFooter className="place-content-end">
          <Button variant="ghost" onClick={() => setShowFullArticle(true)}>
            More <ArrowRight width={15} height={15} />
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showFullArticle} onOpenChange={setShowFullArticle}>
        <DialogContent className="max-w-6xl h-[80vh] overflow-y-auto block">
          <DialogHeader>
            <DialogTitle className="text-3xl">{article.title}</DialogTitle>
          </DialogHeader>
          <div className="pt-2 flex flex-col gap-2">
            <img
              src={article.urlToImage ?? '/images/placeholder.jpg'}
              alt={article.title}
              className="h-52 w-full object-cover md:h-[450px]"
            />
            <i className="text-sm">
              {article.author} - {new Date(article.publishedAt).toLocaleString()}
            </i>
            <p>{article.content}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default NewsItem;
