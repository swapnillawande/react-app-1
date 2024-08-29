import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {

  const [text, setText] = useState();

  function handleSelect(selectedButton) {
    setText(selectedButton);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {/* {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem}/> )} */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />

          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={text === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={text === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={text === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={text === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {!text ? <p>Please select a topic.</p> :


            <div id='tab-content'>
              <h3>{EXAMPLES[text].title}</h3>
              <p>{EXAMPLES[text].description}</p>
              <pre>
                <code>
                  {EXAMPLES[text].code}
                </code>
              </pre>
            </div>

          }

        </section>

      </main>
    </div>
  );
}


export default App;
