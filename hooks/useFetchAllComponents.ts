import { useQuery } from "@tanstack/react-query";

export const QUERY_KEY = ["todos"];

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
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        return response.json();
      } catch {
        return null;
      }
    },
  });
}
