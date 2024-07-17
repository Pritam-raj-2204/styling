// Path: src/components/Button.js

function Button(props) {
    switch (props.color) {
      case 'green': { 
        return (
          <button
            style={{ background: 'white', color: 'green', borderRadius: '5px', border: '1px solid green' }}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      case 'red': { 
        return (
          <button
            style={{ background: 'white', color: 'red' }}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      default: {
        return <button onClick={props.onClick}>{props.children}</button>;
      }
    }
  }
  
export default Button;
  
  // 💡💡 We need to export the Sqaure component so that we can use it in an external module (file).
  