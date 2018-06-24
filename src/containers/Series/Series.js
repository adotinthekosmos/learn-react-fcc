import React, { Component } from "react";
import SeriesList from "../../components/SeriesList/SeriesList";
class Series extends Component {
  state = {
    series: [],
    value: ""
  };
  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  }

  onSeriesInputChange = e => {
    console.log(e);
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      alert(this.state.value);
    }
  };

  render() {
    return (
      <div>
        The length of series array = {this.state.series.length}
        <div>
          <input
            type="text"
            onChange={this.onSeriesInputChange}
            onKeyPress={this._handleKeyPress}
          />
        </div>
        <SeriesList list={this.state.series} />
      </div>
    );
  }
}

export default Series;
