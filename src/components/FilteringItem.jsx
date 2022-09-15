function FilteringItem() {
  return (
    <li className="card-filter relative flex items-center pr-10 group ">
      <h3 className="group-hover:text-veryDarkGrayishCyan">HTML</h3>
      <div className="remove-filter-btn" id="remove-filter">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
          />
        </svg>
      </div>
    </li>
  );
}
export default FilteringItem;
