import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/cn';
import { FC } from 'react';

type Props = {
  className?: string | undefined;
};

const NewsSkeleton: FC<Props> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-4 pt-16 sm:grid-cols-2 md:grid-cols-3', className)}>
      <Skeleton className="w-full h-[480px] rounded-md" />
      <Skeleton className="w-full h-[480px] rounded-md" />
      <Skeleton className="w-full h-[480px] rounded-md" />
    </div>
  );
};
export default NewsSkeleton;
