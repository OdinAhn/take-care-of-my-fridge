import { adminForecastApi, type ForecastResponse } from '@/common/api/clients';
import { unwrap } from '@/common/api/unwrap';

export async function getForecast(
  weekStart?: string,
  signal?: AbortSignal,
  demo = false,
): Promise<ForecastResponse> {
  return unwrap(
    demo
      ? adminForecastApi.getDemo({ signal })
      : weekStart
        ? adminForecastApi.getByWeek({ weekStart }, { signal })
        : adminForecastApi.getLatest({ signal }),
  );
}
