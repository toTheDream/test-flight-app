import { Radio, RadioChangeEvent } from "antd";
import { useFilters } from "../../contexts/FiltersContext/FiltersContext";
import { currencyOptions } from "./constants";

import "./CurrencyFilter.css";

const CurrencyFilter = () => {
  const filters = useFilters();

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    filters.setCurrency(value);
  };

  return (
    <div className="currency-filter-container">
      <h3 className="currency-filter-title">Валюта</h3>
      <Radio.Group
        options={currencyOptions}
        onChange={onChange}
        value={filters.currency}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};

export default CurrencyFilter;
