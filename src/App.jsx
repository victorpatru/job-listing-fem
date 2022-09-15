/* Specs 

Your users should be able to:

[] View the optimal layout for the site depending on their device's screen size
[] See hover states for all interactive elements on the page
[] Filter job listings based on the categories

### Filtering


Use the [data.json](./data.json) file to pull the data and then dynamically add the content. This would be perfect if you're looking to practice a JS library/framework like React, Vue, or Svelte.

To add a filter, the user needs to click on the tablets on the right-side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.


*/

import Header from "./components/Header";
import CardList from "./components/CardList";
import FilteringCard from "./components/FilteringCard";
import { FilteringProvider } from "./context/FilteringContext";

function App() {
  return (
    <FilteringProvider>
      <Header />
      {/* Add state that if filtering is open add the "space-y-60" to the classNames of the main element */}
      <main className="relative min-h-screen bg-backgroundLightCyan font-serif flex flex-col justify-start items-center">
        <FilteringCard />
        <CardList />
      </main>
    </FilteringProvider>
  );
}
export default App;
