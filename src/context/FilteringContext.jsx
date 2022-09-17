import { useEffect } from "react";
import { createContext, useState } from "react";
import data from "../assets/data/data.json";

const FilteringContext = createContext();

export const FilteringProvider = ({ children }) => {
  const [displayedCompanies, setDisplayedCompanies] = useState(data);
  // Set up current filter State
  const [currentFilter, setCurrentFilter] = useState({
    level: null,
    languages: [],
    role: null,
    tools: [],
  });

  useEffect(() => {
    // console.log(displayedCompanies, currentFilter);

    const actualFilter = {};

    for (const key in currentFilter) {
      if (currentFilter[key] !== null && currentFilter[key]?.length > 0) {
        actualFilter[key] = currentFilter[key];
      }
    }
    if (actualFilter.level || actualFilter.role) {
      setDisplayedCompanies(
        displayedCompanies?.filter((item) => {
          for (const key in actualFilter) {
            if (item[key] === undefined || item[key] != actualFilter[key]) {
              return false;
            }
          }
          return true;
        })
      );
    } else {
      setDisplayedCompanies(
        displayedCompanies?.filter((item) => {
          for (const key in actualFilter) {
            if (
              item[key] === undefined ||
              !item[key].includes(...actualFilter[key])
            ) {
              return false;
            }
          }
          return true;
        })
      );
    }
  }, [currentFilter]);

  // Add individual filter item
  const addFilter = (e) => {
    const filterItem = e.target.firstChild.data;

    // Get unique category entries for each filtering category
    const levelUniqueCategories = [
      ...new Set(data.map((company) => company.level)),
    ];
    const roleUniqueCategories = [
      ...new Set(data.map((company) => company.role)),
    ];
    const languagesUniqueCategories = [
      ...new Set(data.map((company) => company.languages).flat()),
    ];

    const toolsUniqueCategories = [
      ...new Set(data.map((company) => company.tools).flat()),
    ];

    if (levelUniqueCategories.includes(filterItem)) {
      setCurrentFilter({
        ...currentFilter,
        level: filterItem,
      });
    } else if (roleUniqueCategories.includes(filterItem)) {
      setCurrentFilter({
        ...currentFilter,
        role: filterItem,
      });
    } else if (
      languagesUniqueCategories.includes(filterItem) &&
      !currentFilter.languages.includes(filterItem)
    ) {
      setCurrentFilter({
        ...currentFilter,
        languages: [...currentFilter.languages, filterItem],
      });
    } else if (
      toolsUniqueCategories.includes(filterItem) &&
      !currentFilter.tools.includes(filterItem)
    ) {
      setCurrentFilter({
        ...currentFilter,
        tools: [...currentFilter.tools, filterItem],
      });
    }
  };

  // Reset all filter items
  const resetFilter = () => {
    setCurrentFilter({
      level: null,
      languages: [],
      role: null,
      tools: [],
    });
    setDisplayedCompanies(data);
  };

  // Remove individual filter item
  const handleFilterRemove = (currentItem) => {
    for (const filter in currentFilter) {
      // Removes level or role filter
      if (currentFilter[filter] === currentItem) {
        setCurrentFilter({ ...currentFilter, [filter]: null });
      }

      // Removes either languages or tools filter
      else if (currentFilter[filter]?.includes(currentItem)) {
        setCurrentFilter({
          ...currentFilter,
          [filter]: [
            ...currentFilter[filter].filter((item) => item !== currentItem),
          ],
        });
      }
    }

    setDisplayedCompanies(data);
  };

  return (
    <FilteringContext.Provider
      value={{
        displayedCompanies,
        currentFilter,
        addFilter,
        resetFilter,
        handleFilterRemove,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};

export default FilteringContext;
