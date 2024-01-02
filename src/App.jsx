import CoreConcepts from "./CoreConcepts";
import Header from "./Header";
import { CORE_CONCEPTS } from './data.js';
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts{...CORE_CONCEPTS[1]} />
            <CoreConcepts{...CORE_CONCEPTS[2]} />
            <CoreConcepts{...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>

    </div>
  );
}

export default App;
