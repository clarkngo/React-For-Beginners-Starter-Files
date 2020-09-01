import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        { /* comment */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Vist Store</button>
      </form>
    )
  }
}

export default StorePicker;
