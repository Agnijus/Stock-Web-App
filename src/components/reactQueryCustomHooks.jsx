import { useQuery } from "@tanstack/react-query";
import customFetch from "../util";
import { useSelector } from "react-redux";

export const useFetchStocks = () => {
  const { startDate, endDate, interval } = useSelector((state) => state.stock);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["stocks", startDate, endDate, interval],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `/time_series?symbol=tsla&interval=${interval}&start_date=${startDate}&end_date=${endDate}`
      );
      console.log("data refetched");
      return data;
    },
  });
  return { isLoading, isError, error, data };
};
