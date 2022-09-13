'use strict';


// A React component
const Button1 =()=>{
  
  const [liked, setLiked] = React.useState(false);

  if (liked) {
      return 'You clicked the button.';
    }
  
  return(<button onClick={() => setLiked(true) }>
        This button is a React component
      </button>)}


// Base container
const BaseContainer =()=> {
   {
    return (
      <div><Button1></Button1></div>
    );
  }
}

const domContainer = document.querySelector('#react_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<BaseContainer />);
