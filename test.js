class Options extends React.Component {
  constructor() {
    super();

    this.state = {
      visibility: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  render() {
    return (
      <>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <div>Here are some options</div>}
      </>
    );
  }

  toggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
}
