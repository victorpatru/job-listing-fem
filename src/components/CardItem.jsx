import { useContext } from "react";
import FilteringContext from "../context/FilteringContext";

function CardItem({ company }) {
  const {
    company: companyName,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    new: newPosting,
    position,
    postedAt,
    role,
    tools,
  } = company;

  const { addFilter } = useContext(FilteringContext);
  console.log(logo);

  return (
    // Card Container
    // border-l-8 border-primaryCyan => add this only on the top two
    <section className="container max-w-xs bg-white shadow-md rounded-lg text-base font-bold md:max-w-4xl xl:max-w-6xl mt-14">
      <div className="relative px-6 py-10 flex flex-col space-y-2">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex flex-col items-center md:flex-row md:space-y-0 md:space-x-6 mr-10">
            {/* Image Div */}
            <a href="#">
              <img
                src={logo}
                alt="Company Logo"
                className="absolute w-12 left-8 -top-6 md:w-20  md:static"
              />
            </a>
            <div className="flex flex-col space-y-2 mb-4">
              {/* Company name + Label Container */}
              <div className="flex items-center">
                <h1 className="text-primaryCyan md:text-xl">{companyName}</h1>
                {newPosting && (
                  <span className="uppercase bg-primaryCyan text-white px-3 py-1 rounded-full text-[14px] ml-3">
                    New!
                  </span>
                )}
                {featured && (
                  <span className="uppercase bg-veryDarkGrayishCyan text-white px-3 py-1 rounded-full text-[14px] ml-2">
                    Featured
                  </span>
                )}
              </div>
              {/* Job Name 
        
        @todo: add job listing link */}
              <a href="#" className="hover:text-primaryCyan md:text-xl">
                {position}
              </a>

              {/* Job Listing Additional Information Flex Container */}
              <ul className="flex font-medium space-x-5 text-darkGrayishCyan md:text-md">
                <li>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
              </ul>
            </div>
          </div>
          {/* Diving Line */}
          <div className="border-t-[1px] border-[#B7C4C4] md:hidden"></div>

          {/* Technologies List Items */}
          <ul
            className="flex flex-row flex-wrap gap-4 technologies-card pt-6 pb-2 pr-4 md:flex-nowrap"
            onClick={addFilter}
          >
            <li className="card">{role}</li>
            <li className="card">{level}</li>
            {languages.map((language, index) => (
              <li className="card" key={index}>
                {language}
              </li>
            ))}
            {tools.map((tool, index) => (
              <li className="card" key={index}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default CardItem;
