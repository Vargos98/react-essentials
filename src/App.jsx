import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { EXAMPLES } from './data.js'
import Header from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from './data.js';



function App() {
  const [selectedTopic, setSelectedTopic] = useState('components')
  // let tabContent = "Please click a button!"
  function handleSelect(selectedButton) {
    // tabContent = selectedButton;\
    setSelectedTopic(selectedButton);
  }
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
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
