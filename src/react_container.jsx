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

const domContainer = document.querySelector('#react_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<BaseReactComponent />);
