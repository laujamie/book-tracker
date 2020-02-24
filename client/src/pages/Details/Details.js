import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import API from "../../utils/API";

class Details extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <h1>
              {this.state.book.title} by {this.state.book.author}
            </h1>
          </Grid>
          <Grid item xs={12}>
            <Link exact to="/">
              Back to Authors
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Details;
