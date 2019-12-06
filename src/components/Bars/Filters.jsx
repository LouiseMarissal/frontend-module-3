import { useEffect, useState } from "react";
import axios from "axios";

export default function Filters(query) {
  const [queryFiltered, setQueryFiltered] = useState([]);

  useEffect(() => {
    console.log(queryFiltered);
    let cancel;
    axios({
      method: "GET",
      url: process.env.REACT_APP_BACKEND_URL + "/cocktail",
      params: { true },
      cancelToken: new axios.CancelToken(c => (cancel = c))
    })
      .then(res => {
        return setQueryFiltered(res.data);
      })
      .catch(err => {
        if (axios.isCancel(err)) return;
      });
    return () => cancel();
  }, [query]);
  return queryFiltered;
}
