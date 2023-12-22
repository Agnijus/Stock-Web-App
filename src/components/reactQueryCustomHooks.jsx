import { useQuery } from "@tanstack/react-query";
import customFetch from "../util";
import { useContext } from "react";
import { GlobalContext } from "../App";

export const useFetchStocks = () => {
  const { startDate, endDate, interval } = useContext(GlobalContext);
  console.log(startDate, endDate);
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `/time_series?symbol=tsla,aapl&interval=${interval}&start_date=${startDate}&end_date=${endDate}`
      );
      return data;
    },
  });
  return { isLoading, isError, error, data };
};
