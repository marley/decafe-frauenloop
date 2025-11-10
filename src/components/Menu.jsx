import Header from "./Header";
function Menu() {
  return (
    <div>
      <Header title="Menu" size="small" />
      <ul>
        <li>
          <img
            src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1270"
            height="50px"
            width="50px"
          />{" "}
          Mushroom cappucino - 3.00 EUR
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1559001724-fbad036dbc9e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160"
            height="50px"
            width="50px"
          />{" "}
          Tiger latte - 4.00 EUR
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1562097691-905c0a23ee19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1546"
            height="50px"
            width="50px"
          />{" "}
          Earl Greu - 3.50 EUR
        </li>
      </ul>
    </div>
  );
}

export default Menu;
