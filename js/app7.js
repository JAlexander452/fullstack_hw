class ParentComponent extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        <ChildComponent />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      message: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isActive: !this.state.isActive });
    // Output a message
    const messages = ["Button clicked!", "button push!", "Late due to Senioritus!"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    this.setState({ message: messages[randomIndex] });
  }

  render() {
    const buttonClass = this.state.isActive ? 'ui button active' : 'ui button';
    const buttonColor = this.state.isActive ? 'green' : '';
    return (
      <div className='ui centered card' style={{ textAlign: 'center' }}>
        <div className='field'>
          <label>ChildComponent</label>
        </div>
        <button className={buttonClass} style={{ backgroundColor: buttonColor, animation: this.state.isActive ? spinAnimation : '' }} onClick={this.handleClick}>Submit!</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

const spinAnimation = {
  animationName: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite'
};

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("content")
);

