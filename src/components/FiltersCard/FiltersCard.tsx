import CurrencyFilter from "../CurrencyFilter/CurrencyFilter";
import TransfersFilter from "../TransfersFilter/TransfersFilter";

import "./FiltersCard.css";

const FiltersCard = () => {
  return (
    <aside className="filters-card">
      <CurrencyFilter />
      <TransfersFilter />
    </aside>
  );
};

export default FiltersCard;
