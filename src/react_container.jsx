'use strict';


// A React component
const Button1 =({onClickButton})=>{
   
  return(<button onClick={() => onClickButton() }>
        This button is a React component
      </button>)}


// Base container
const BaseContainer =()=> {
   {
    const [buttonClicks, setButtonClicks] = React.useState(0);

    const onClickButton = () => {
      setButtonClicks(buttonClicks+1)
    }

    return (
      <div><Button1 onClickButton={() => onClickButton()}/><p>Button was clicked {buttonClicks} times</p></div>
    );
  }
}

const domContainer = document.querySelector('#react_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<BaseContainer />);
