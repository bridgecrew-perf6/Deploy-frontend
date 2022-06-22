import React from "react";
import ReactDOM from "react-dom";
// import "../src/index.css";

class Vote extends React.Component {
  // Initial state of the component.
  state = { vote: 0, score: 0 };

  // Method to change the state of the component, which the UI reflects "live".
  vote(type) {
    this.setState(state => ({
      vote: state.vote === type ? 0 : type
    }));
  }

  // How the UI should look based on the state.
  render() {
    const { vote, score } = this.state;
    return (
      <main>
        <h1>{score + vote}</h1>
        <button
          id="upvote"
          className={vote === 1 ? "active" : undefined}
          onClick={() => this.vote(1)}
        >
          Upvote
        </button>
        <button
          id="downvote"
          className={vote === -1 ? "active" : undefined}
          onClick={() => this.vote(-1)}
        >
          Downvote
        </button>
      </main>
    );
  }
}

// Mount our UI into a DOM container so it can be seen.
export default ReactDOM.render(<Vote />, document.querySelector("#root"));

