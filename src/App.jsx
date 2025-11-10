import Header from "./components/Header";
import Menu from "./components/Menu";
import Button from "./components/Button";
import Event from "./components/Event";

function App() {
  return (
    <div>
      <Header
        title="Mushroom Cafe"
        subtitle="Berlin's first alternative non-coffee cafe (all drinks are made of
        mushrooms!)"
      />
      <img
        src="https://images.unsplash.com/photo-1720022102235-273f598911e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
        alt="underside of a mushroom"
        width="100%"
      />
      <Menu />

      <Button title="Order now!" />

      {/* 
      <Menu />
      <Contact /> */}
    </div>
  );
}

export default App;
