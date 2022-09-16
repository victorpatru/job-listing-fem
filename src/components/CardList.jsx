import CardItem from "./CardItem";
import { useContext } from "react";
import FilteringContext from "../context/FilteringContext";

function CardList() {
  const { companies } = useContext(FilteringContext);

  return (
    <>
      {companies.map((company, index) => (
        <CardItem key={company.id} company={company} />
      ))}
    </>
  );
}
export default CardList;
