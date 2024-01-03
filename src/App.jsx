import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { EXAMPLES } from './data.js'
import Header from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from './data.js';



function App() {
  const [selectedTopic, setSelectedTopic] = useState();
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
            {CORE_CONCEPTS.map((conceptItem) =>


              <CoreConcepts {...conceptItem} />

            )}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>State</TabButton>
            <TabButton isSelected={selectedTopic === 'event'}
              onSelect={() => handleSelect('event')}>Event</TabButton>
            <TabButton isSelected={selectedTopic === 'lists'}
              onSelect={() => handleSelect('lists')}>Lists</TabButton>
            <TabButton isSelected={selectedTopic === 'forms'}
              onSelect={() => handleSelect('forms')}>Forms</TabButton>
            <TabButton isSelected={selectedTopic === 'router'}
              onSelect={() => handleSelect('router')}>Router</TabButton>
            <TabButton isSelected={selectedTopic === 'memo'}
              onSelect={() => handleSelect('memo')}>Memo</TabButton>
             <TabButton isSelected={selectedTopic === 'hooks'}
              onSelect={() => handleSelect('hooks')}>Hooks</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">

            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}

        </section>
      </main>

    </div>
  );
}

export default App;
