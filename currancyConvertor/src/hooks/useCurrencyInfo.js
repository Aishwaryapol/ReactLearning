import { useEffect, useState } from 'react';
function useCurrencyInfo(currency)
{
    const [data,setCurrencyInfo]=useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setCurrencyInfo(res[currency]));
  }, [currency]);
  return data
}

export default useCurrencyInfo;