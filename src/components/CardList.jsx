import CardItem from "./CardItem";
import { useContext } from "react";
import FilteringContext from "../context/FilteringContext";

function CardList() {
  const { companies } = useContext(FilteringContext);

  console.log(companies.length);
  return (
    <>
      {companies.map(
        (company) =>
          typeof company !== undefined && (
            <CardItem key={company.id} company={company} />
          )
      )}
    </>
  );
}
export default CardList;
