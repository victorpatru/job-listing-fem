import { createContext, useState } from "react";
import data from "../assets/data/data.json";

const FilteringContext = createContext();

export const FilteringProvider = ({ children }) => {
  const [companies, setCompanies] = useState(data);
  const [filter, setFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.matches("li")) {
      if (!filter.includes(e.target.firstChild.data)) {
        setFilter((filter) => [...filter, e.target.firstChild.data]);
        setCompanies(
          companies.filter(
            (company) =>
              company.role === e.target.firstChild.data ||
              company.tools.includes(e.target.firstChild.data) ||
              company.languages.includes(e.target.firstChild.data)
          )
        );
        console.log(companies);
      }
    }
    if (filter.includes(e.target.firstChild.data)) {
      const removeItem = (index) => {
        setFilter([...filter.slice(0, index), ...filter.slice(index + 1)]);
      };
      removeItem(filter.indexOf(e.target.firstChild.data));
    }
  };

  const resetFilter = () => {
    setFilter([]);
    setCompanies(data);
  };

  const removeFilterItem = (itemToRemove) => {
    console.log(itemToRemove, filter.indexOf(itemToRemove));
    setFilter([
      ...filter.slice(0, filter.indexOf(itemToRemove)),
      ...filter.slice(filter.indexOf(itemToRemove) + 1),
    ]);
  };

  return (
    <FilteringContext.Provider
      value={{
        companies,
        filter,
        handleFilter,
        resetFilter,
        removeFilterItem,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};

export default FilteringContext;
