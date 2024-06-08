import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstinput = useRef(true);

  useEffect(() => {
    if (isFirstinput.current) {
      isFirstinput.current = search == "";
      return;
    }
    if (search === "") {
      setError("Escriba su pelicula");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar numeros");
      return;
    }
  }, [search]);

  return { search, updateSearch, error };
}
