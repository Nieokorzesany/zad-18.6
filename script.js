var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  componentDidMount: function() {
    console.log(
      "The Counter component ask the browser to configure the initial value"
    );
  },

  componentDidUpdate: function() {
    console.log(
      "Setting a condition that compares the current prop with previous props"
    );
  },

  shouldComponentUpdate: function() {
    console.log("In this method, we will optimize the counter performance");
    return true;
  },

  componentWillUnmount: function() {
    console.log(
      "We call this method every time when we want to reset the counter"
    );
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return React.createElement(
      "h1",
      { className: "title" },
      "Counter",
      React.createElement(
        "div",
        { className: "app" },
        this.state.counter,
        React.createElement(
          "button",
          { onClick: this.increment, className: "plusOne" },
          "+"
        ),
        React.createElement(
          "button",
          { onClick: this.decrement, className: "minusOne" },
          "-"
        )
      )
    );
  }
});

var element = React.createElement("div", {}, React.createElement(Counter));
ReactDOM.render(element, document.getElementById("app"));
