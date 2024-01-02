import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";

import Header from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from './data.js';
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts{...CORE_CONCEPTS[0]} />
            <CoreConcepts{...CORE_CONCEPTS[1]} />
            <CoreConcepts{...CORE_CONCEPTS[2]} />
            <CoreConcepts{...CORE_CONCEPTS[3]} />
          </ul>
        </section>
       <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
       </section>
      </main>

    </div>
  );
}

export default App;
