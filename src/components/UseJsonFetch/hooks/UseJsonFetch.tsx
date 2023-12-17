import { useEffect, useState } from "react";
import { ApiResponse } from "../interface/InterfaceUseJsonFetch";

export const useJsonFetch = <T,>(url: string, opts?: RequestInit): ApiResponse<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return { data, loading, error };
};

export default useJsonFetch;
