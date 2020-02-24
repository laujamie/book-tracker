import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import API from "../../utils/API";

const styles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5)
    }
  }
});

class Books extends React.Component {
  state = {
    books: [],
    title: "",
    author: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks().then(res =>
      this.setState({ books: res.data, title: "", author: "" })
    );
  };
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({ title: this.state.title, author: this.state.author })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid container item xs={12}>
            <Grid item md={6}>
              <h1>What Book Should I Read?</h1>
              <form autoComplete="off">
                <TextField
                  className={classes.root}
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  label="Title"
                  placeholder="Title (required)"
                  required
                  fullWidth
                ></TextField>
                <TextField
                  className={classes.root}
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  label="Author"
                  placeholder="Author (required)"
                  required
                  fullWidth
                ></TextField>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </Button>
              </form>
            </Grid>
            <Grid item md={6} xs={12}>
              <h1>Books on my List</h1>
              {this.state.books.length ? (
                <ul>
                  {this.state.books.map(book => (
                    <li key="book._id">
                      <Link
                        to={"/books/" + book._id}
                        style={{ marginRight: "1rem" }}
                      >
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </Link>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => this.deleteBook(book._id)}
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <h3>No books to display</h3>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Books.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Books);
