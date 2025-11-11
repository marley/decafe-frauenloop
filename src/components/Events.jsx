import Header from "./Header";
import Event from "./Event";

function Events() {
  return (
    <div>
      <Header title="Events" size="small" />
      <div className="container">
        <div className="row">
          <div className="col">
            <Event
              title="Craft night for kids"
              date="12.10.25"
              imgUrl="https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1614"
            />
          </div>
          <div className="col">
            <Event
              title="Pub Quiz"
              date="11.11.25"
              imgUrl="https://images.unsplash.com/photo-1532634651-994aef0f855c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1738"
            />
          </div>
          <div className="col">
            <Event
              title="Latte Workshop"
              date="1.12.25"
              imgUrl="https://images.unsplash.com/photo-1543193356-13eacb373b1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
