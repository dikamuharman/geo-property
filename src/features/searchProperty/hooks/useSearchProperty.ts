import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import searchService from '../service/searchService';

const useSearchProperty = () => {
  const [params] = useSearchParams();
  const lat = params.get('lat');
  const lng = params.get('lng');

  const querySearch = useQuery({
    queryKey: ['search'],
    queryFn: () =>
      searchService.searchPropertyByLocation([Number(lat), Number(lng)]),
  });

  return querySearch;
};

export default useSearchProperty;
