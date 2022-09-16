import { createContext, useState } from "react";
import data from "../assets/data/data.json";

const FilteringContext = createContext();

export const FilteringProvider = ({ children }) => {
  const [companies, setCompanies] = useState(data);
  const [filter, setFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.matches("li")) {
      !filter.includes(e.target.firstChild.data) &&
        setFilter((filter) => [...filter, e.target.firstChild.data]);
    }
  };

  const resetFilter = () => {
    setFilter([]);
  };

  return (
    <FilteringContext.Provider
      value={{
        companies,
        filter,
        handleFilter,
        resetFilter,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};

export default FilteringContext;
