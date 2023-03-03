import Papa from "papaparse";
import { useEffect, useState } from "react";

const useHours = () => {
    const [hours, setHours] = useState([]);
    const db = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTI_ISmjy4pkWwLHdQjqgT8rM9KxIusCVEbknMrQVwj1uwodOzz05XeD7W9f3FerYgsYpjWbnIJ9S3X/pub?gid=0&single=true&output=csv'
    const getHours = async () => {
      const res = await fetch(db);
      const data = await res.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, {
          header: true,
          complete: (result) => resolve(result.data),
          error: reject})
      })
      setHours(parsed);
    }
  
    useEffect(() => {
      getHours();
    }, []);

    return[hours];
}

export default useHours;