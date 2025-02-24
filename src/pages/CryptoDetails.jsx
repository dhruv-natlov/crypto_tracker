import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCryptoDetails } from "../services/api";
import PriceChart from "../components/PriceChart";

const CryptoDetails = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCryptoDetails(id);
      setCrypto(data);
    };
    getData();
  }, [id]);

  if (!crypto) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        {crypto.name} ({crypto.symbol.toUpperCase()})
      </h1>
      <p className="text-lg">
        Current Price: ${crypto.market_data.current_price.usd}
      </p>
      <p className="text-md">
        Market Cap: ${crypto.market_data.market_cap.usd}
      </p>
      <p className="text-md">
        24h Change: {crypto.market_data.price_change_percentage_24h}%
      </p>
      <img
        src={crypto.image.large}
        alt={crypto.name}
        className="w-20 h-20 my-4"
      />

      <PriceChart coinId={id} />
    </div>
  );
};

export default CryptoDetails;
