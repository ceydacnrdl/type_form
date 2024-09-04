import { useQuery } from "@tanstack/react-query";

export const QUERY_KEY = ["components"];

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export function useFetchAllComponents() {
  return useQuery<ToDo>({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      try {
        const response = await fetch("/component", {});
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      } catch {
        return null;
      }
    },
  });
}
