import { useContext } from "react";
import FilteringItem from "./FilteringItem";
import FilteringContext from "../context/FilteringContext";

function FilteringCard() {
  const { currentFilter, resetFilter } = useContext(FilteringContext);

  const filter = Object.values(currentFilter)
    .filter((item) => item?.length !== undefined)
    .flat();

  if (filter.length > 0) {
    return (
      // Card Filtering Container
      <section className="container max-w-xs md:max-w-4xl xl:max-w-6xl">
        <div className=" relative -top-12  bg-white shadow-xl rounded text-base font-bold md:max-w-4xl xl:max-w-6xl">
          <div className="flex justify-between items-center p-6">
            <ul className="flex flex-wrap gap-4">
              {filter.map((item, index) => (
                <FilteringItem item={item} key={index} />
              ))}
            </ul>
            {/* Clear Button */}
            <span
              className="text-darkGrayishCyan cursor-pointer hover:text-primaryCyan"
              onClick={resetFilter}
            >
              Clear
            </span>
          </div>
        </div>
      </section>
    );
  }
}
export default FilteringCard;
