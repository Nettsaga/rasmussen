import { useEffect } from 'react';
import { updateSEO } from '@/lib/seo';

export const useSEO = (pageKey: string) => {
  useEffect(() => {
    updateSEO(pageKey);
  }, [pageKey]);
};
