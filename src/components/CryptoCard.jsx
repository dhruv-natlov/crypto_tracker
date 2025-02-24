import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";

const CryptoCard = ({ coin }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.includes(coin.id);

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h2>
      <p>Price: ${coin.current_price}</p>
      <button
        className={`mt-2 px-4 py-2 rounded ${
          isFavorite ? "bg-red-500" : "bg-blue-500"
        }`}
        onClick={() =>
          isFavorite
            ? dispatch(removeFavorite(coin.id))
            : dispatch(addFavorite(coin.id))
        }
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CryptoCard;
