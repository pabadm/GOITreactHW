import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };
  handleSubmit = (evt) => {
    const { query } = this.state;
    const { toSubmitQuery } = this.props;
    evt.preventDefault();
    toSubmitQuery(query);
  };

  render() {
    const { handleChange, handleSubmit, query } = this.state;
    return (
      <div className={SearchBar}>
        <form className={styles["SearchBar-form"]} onSubmit={handleSubmit}>
          <input
            className={styles["SearchBar-form-input"]}
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="search for some films"
            value={query}
          />
          <input
            className={styles["SearchBar-form-submit"]}
            name="submit"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    );
  }
}
