import { useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "../util";

export const useFetchStocks = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data } = await customFetch.get(
        "/time_series?symbol=tsla&interval=1month"
      );
      return data;
    },
  });
  return { isLoading, isError, data };
};

const add = (x, y, z) => {
  return x + y + z;
};

const sum = add(1, 15, 3);
