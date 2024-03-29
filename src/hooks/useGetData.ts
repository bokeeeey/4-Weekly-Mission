import { useEffect, useState } from "react";

export default function useGetData(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, fallback: true };
}
