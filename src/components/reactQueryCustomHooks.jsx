import { useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "../util";

export const useFetchStocks = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data } = await customFetch.get(
        "/time_series?symbol=tsla,aapl&interval=5min&date=2023-12-21"
      );
      return data;
    },
  });
  return { isLoading, isError, data };
};
