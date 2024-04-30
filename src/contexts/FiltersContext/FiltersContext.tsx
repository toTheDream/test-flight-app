import { CheckboxValueType } from "antd/es/checkbox/Group";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { transfersOptions } from "../../components/TransfersFilter/constants";

type FiltersContext = {
  currency: "rub" | "usd" | "eur";
  setCurrency: Dispatch<SetStateAction<"rub" | "usd" | "eur">>;
  transfers: CheckboxValueType[];
  setTransfers: Dispatch<SetStateAction<CheckboxValueType[]>>;
};

const FiltersContext = createContext<FiltersContext | null>(null);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currency, setCurrency] = useState<"rub" | "usd" | "eur">("rub");
  const [transfers, setTransfers] =
    useState<CheckboxValueType[]>(transfersOptions);

  return (
    <FiltersContext.Provider
      value={{
        currency,
        setCurrency,
        transfers,
        setTransfers,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const filtersContext = useContext(FiltersContext);

  if (!filtersContext) {
    throw new Error(
      "filtersContext has to be used within <FiltersContext.Provider>"
    );
  }

  return filtersContext;
};
