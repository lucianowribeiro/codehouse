import React from 'react';
import CodeHeader from './components/CodeHeader';
import CodeLogo from './components/CodeLogo';
import CodeButton from './components/CodeButton';
import CodeFooter from './components/CodeFooter';
import CodeLink from './components/CodeLink';
import CodeHighLight from './components/CodeHighLight';

function App() {
  return (
    <>
      <CodeHeader>
        <CodeLogo />
        <CodeButton>Novo Video</CodeButton>
      </CodeHeader>
      <CodeFooter>
        <CodeLogo />
        <p>
          Site feito da <CodeHighLight>#ImersaoReact</CodeHighLight> da <CodeLink>Alura</CodeLink>
        </p>
      </CodeFooter>
    </>
  );
} 

export default App;