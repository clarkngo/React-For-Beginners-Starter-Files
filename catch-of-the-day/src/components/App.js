import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // method 1 in JS (if you have an array) - this.state.fishes.push(fish);
    // method 2 in JS (update objects) - this.state.fishes.fish1 = fish;

    // object spread (deep clone) on the top level
    // 1. take copy of the existing state
    const fishes = {...this.state.fishes}
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
