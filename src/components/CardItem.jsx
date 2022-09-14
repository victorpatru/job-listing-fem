function CardItem() {
  return (
    // Card Container
    <section className="relative container max-w-xs bg-white  shadow-md rounded-lg text-base border-l-8 border-primaryCyan font-bold md:max-w-4xl xl:max-w-6xl">
      <div className="px-6 py-10 flex flex-col space-y-2">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex flex-col items-center md:flex-row md:space-y-0 md:space-x-6">
            {/* Image Div */}
            <a href="#">
              <img
                src="src/assets/images/photosnap.svg"
                alt="Company Logo"
                className="absolute w-12 left-8 -top-6 md:w-20  md:static"
              />
            </a>
            <div className="flex flex-col space-y-2">
              {/* Company name + Label Container */}
              <div className="flex items-center space-x-2">
                <h1 className="text-primaryCyan mr-6 md:text-xl">Photosnap</h1>
                <span className="uppercase bg-primaryCyan text-white px-3 py-1 rounded-full text-[14px]">
                  New!
                </span>
                <span className="uppercase bg-veryDarkGrayishCyan text-white px-3 py-1 rounded-full text-[14px]">
                  Featured
                </span>
              </div>
              {/* Job Name 
        
        @todo: add job listing link */}
              <a href="#" className="hover:text-primaryCyan md:text-xl">
                Senior Frontend Developer
              </a>

              {/* Job Listing Additional Information Flex Container */}
              <ul className="flex font-medium space-x-6 text-darkGrayishCyan md:text-md">
                <li>1d ago</li>
                <li>Full Time</li>
                <li>USA only</li>
              </ul>
            </div>
          </div>
          {/* Diving Line */}
          <div className="border-t-[1px] border-[#B7C4C4] md:hidden"></div>

          {/* Technologies List Items */}
          <ul className="flex flex-row flex-wrap gap-4 technologies-card pt-6 pb-2 md:flex-nowrap">
            <li className="card">Frontend</li>
            <li className="card">Senior</li>
            <li className="card">HTML</li>
            <li className="card">CSS</li>
            <li className="card">JavaScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default CardItem;
