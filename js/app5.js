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
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const buttonClass = this.state.isActive ? 'ui button active' : 'ui button'; // Change classes based on isActive state
    const buttonColor = this.state.isActive ? 'green' : ''; // Change color based on isActive state
    return (
      <div className='ui centered card'>
        <div className='field'>
          <label>ChildComponent</label>
        </div>
        <button className={buttonClass} style={{ backgroundColor: buttonColor }} onClick={this.handleClick}>Submit!</button> {/* Apply button color */}
      </div>
    );
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("content")
);

