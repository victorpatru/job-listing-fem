import CardItem from "./CardItem";
import { useContext } from "react";
import FilteringContext from "../context/FilteringContext";

function CardList() {
  const { displayedCompanies } = useContext(FilteringContext);

  return (
    <>
      {displayedCompanies?.length > 0 &&
        displayedCompanies.map((company) => (
          <CardItem key={company.id} company={company} />
        ))}
    </>
  );
}
export default CardList;
