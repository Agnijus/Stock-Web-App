import { useQuery } from "@tanstack/react-query";
import customFetch from "../util";
import { useContext } from "react";
import { GlobalContext } from "../App";

export const useFetchStocks = () => {
  const { currDate } = useContext(GlobalContext);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `/time_series?symbol=tsla,aapl&interval=5min&start_date=2023-12-21&end_date=${currDate}`
      );
      return data;
    },
  });
  return { isLoading, isError, error, data };
};
