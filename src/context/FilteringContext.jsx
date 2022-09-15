import { createContext, useState } from "react";
import data from "../assets/data/data.json";

const FilteringContext = createContext();

export const FilteringProvider = ({ children }) => {
  const [companies, setCompanies] = useState(data);

  return (
    <FilteringContext.Provider
      value={{
        companies,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};

export default FilteringContext;
