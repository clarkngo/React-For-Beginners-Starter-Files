import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  /*
  if method goToStore (i.e. goToStore(event) {} ) instead of property goToStore
  constructor() {
    super() // run the the component we are extending first
    this.goToStore = this.goToStore.bind(this);
  }
  */

  myInput = React.createRef();

  // component property
  goToStore = (event) => {
    // 1. stops the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    console.log(this);
    // 3. change the page to /store/whatever-they-entered
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore} >
        { /* comment */ }
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Vist Store</button>
      </form>
    )
  }
}

export default StorePicker;
