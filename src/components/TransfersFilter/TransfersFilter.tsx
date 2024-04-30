import { Checkbox, CheckboxProps, Flex } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useFilters } from "../../contexts/FiltersContext/FiltersContext";

import "./TransfersFilter.css";
import { transfersOptions } from "./constants";

const TransfersFilter = () => {
  const filters = useFilters();

  const checkAll = transfersOptions.length === filters?.transfers.length;
  const indeterminate =
    filters.transfers.length > 0 &&
    filters.transfers.length < transfersOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    filters.setTransfers(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    filters.setTransfers(e.target.checked ? transfersOptions : []);
  };

  return (
    <div>
      <h3 className="transfers-filter-title">Количество пересадок</h3>

      <Flex vertical className="transfers-checkbox-group-container">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Все
        </Checkbox>
        <Checkbox.Group
          style={{ display: "flex", flexDirection: "column" }}
          options={transfersOptions}
          value={filters.transfers}
          onChange={onChange}
        />
      </Flex>
    </div>
  );
};

export default TransfersFilter;
