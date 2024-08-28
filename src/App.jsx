import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';

function App() {
 
  const [ text, setText] = useState('components');
  
  function handleSelect(selectedButton){
    setText(selectedButton);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description = {CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title}
              description = {CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />            
            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description = {CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />
 
            </ul>
        </section>
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
            <TabButton onSelect ={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect ={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect ={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect ={() => handleSelect('state')}>State</TabButton>
            </menu>
            <div id='tab-content'>
                <h3>{EXAMPLES[text].title}</h3>
                <p>{EXAMPLES[text].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[text].code}
                  </code>
                </pre>
            </div>
        </section>

      </main>
    </div>
  );
}


export default App;
