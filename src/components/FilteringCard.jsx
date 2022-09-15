import FilteringItem from "./FilteringItem";

function FilteringCard() {
  return (
    // Card Filtering Container
    <section className="container max-w-xs md:max-w-4xl xl:max-w-6xl">
      <div className=" relative -top-12  bg-white shadow-xl rounded text-base font-bold md:max-w-4xl xl:max-w-6xl">
        <div className="flex justify-between items-center p-6">
          <ul className="flex flex-wrap gap-4">
            <FilteringItem item="HTML" />
            <FilteringItem item="CSS" />
            <FilteringItem item="JavaScript" />
          </ul>

          {/* Clear Button */}
          <span className="text-darkGrayishCyan cursor-pointer hover:text-primaryCyan">
            Clear
          </span>
        </div>
      </div>
    </section>
  );
}
export default FilteringCard;
