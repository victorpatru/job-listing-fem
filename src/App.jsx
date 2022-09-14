/* Specs 

Your users should be able to:

[] View the optimal layout for the site depending on their device's screen size
[] See hover states for all interactive elements on the page
[] Filter job listings based on the categories

### Filtering


Use the [data.json](./data.json) file to pull the data and then dynamically add the content. This would be perfect if you're looking to practice a JS library/framework like React, Vue, or Svelte.

To add a filter, the user needs to click on the tablets on the right-side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.


*/

function App() {
  return (
    <main className="min-h-screen bg-backgroundLightCyan font-serif">
      <header className="bg-mobile-header-image bg-primaryCyan bg-no-repeat bg-cover bg-center h-36 md:bg-desktop-header-image"></header>
      <h1 className="text-6xl">Hello</h1>
    </main>
  );
}
export default App;
