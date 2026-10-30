import { queryOptions } from '@tanstack/react-query';

import { getDemoDealAnalysis, getLatestDealAnalysis } from './api';

export const dealQueries = {
  all: ['dealAnalysis'] as const,
  demo: () =>
    queryOptions({
      queryKey: [...dealQueries.all, 'demo'],
      queryFn: ({ signal }) => getDemoDealAnalysis(signal),
    }),
  latest: () =>
    queryOptions({
      queryKey: [...dealQueries.all, 'latest'],
      queryFn: ({ signal }) => getLatestDealAnalysis(signal),
    }),
};
