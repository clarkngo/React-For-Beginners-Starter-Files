import React from 'react';

/*
stateless functional component version 1.0
*/

function Header(props) {
  return (
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="The">The</span>
        </span>
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
}

/*
stateless functional component version 2.0
arrow head functions - making it more concise
*/

const Header = (props) => {
  return (
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="The">The</span>
        </span>
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
}

/*
stateless functional component version 3.0
arrow head functions with implicit return - making it more concise
*/

const Header = (props) => (
  <header className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="The">The</span>
      </span>
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// stateless functional component version 3.0
// arrow head functions with implicit return with 1 arg - making it more concise
const Header = props => (
  <header className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="The">The</span>
      </span>
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

/*
stateless functional component version 4.0
destructuring the props - parameters separated by comma
i.e. const Header = ({ tagline, age })
*/

const Header = ({ tagline }) => (
  <header className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="The">The</span>
      </span>
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="The">The</span>
          </span>
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;
