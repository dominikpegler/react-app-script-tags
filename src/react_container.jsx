'use strict';

class BaseReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You clicked the button.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        This button is a React component
      </button>
    );
  }
}

let domContainer = document.querySelector('#react_container');
ReactDOM.render(<BaseReactComponent />, domContainer);