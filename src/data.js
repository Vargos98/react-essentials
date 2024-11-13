import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
  event: {
    title: 'Event',
    description:
      'Just like HTML DOM events, React can perform actions based on user events.',
    code: `
    function Football() {
      const shoot = () => {
        alert("Great Shot!");
      }
    
      return (
        <button onClick={shoot}>Take the shot!</button>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Football />);
}`,
  },
  lists: {
    title: 'Lists',
    description:
      'In React, you will render lists with some type of loop. The JavaScript map() array method is generally preferred.',
    code: `
    function Car(props) {
      return <li>I am a { props.brand }</li>;
    }
    
    function Garage() {
      const cars = ['Ford', 'BMW', 'Audi'];
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <ul>
            {cars.map((car) => <Car brand={car} />)}
          </ul>
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);
    
    
}`,
  },
  forms: {
    title: 'Forms',
    description:
      'Just like in HTML, React uses forms to allow users to interact with the web page.',
    code: `
    function MyForm() {
      return (
        <form>
          <label>Enter your name:
            <input type="text" />
          </label>
        </form>
      )
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);
    
    
}`,
  },
  router: {
    title: 'React Router',
    description:
      `Create react app does not include page routing, 
       React router is the most popular solution, because of which page reloading does not occur.

       Add React Router : 
       npm i -D react-router-dom
      `,
    code: `
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
    
}`,
  },
  memo: {
    title: 'Memo',
    description:
      'Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance',
    code: `
    import { memo } from "react";
    const Todos = ({ todos }) => {
      console.log("child render");
      return (
          <>
            <h2>My Todos</h2>
              {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
              })}
          </>
      );
    };
    export default memo(Todos);   
    
}`,
  },
  hooks: {
    title: 'Hooks',
    description:
      'Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.',
    code: `
    import React, { useState } from "react";
    import ReactDOM from "react-dom/client";

    function FavoriteColor() {
      const [color, setColor] = useState("red");

      return (
        <>
          <h1>My favorite color is {color}!</h1>
              <button
                type="button"
                onClick={() => setColor("blue")}>Blue</button>
              <button
                type="button"
                onClick={() => setColor("red")}>Red</button>
              <button
                type="button"
                onClick={() => setColor("pink")}>Pink</button>
              <button
                type="button"
                onClick={() => setColor("green")}>Green</button>
        </>s   
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
}`,
  },

};
