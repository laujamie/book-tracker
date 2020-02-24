import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  TextField,
  Button,
  makeStyles
} from "@material-ui/core";
import API from "../../utils/API";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  }
}));

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
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid container item xs={12}>
            <Grid item md={6}>
              <h1>What Book Should I Read?</h1>
              <form autoComplete="off">
                <TextField
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  label="Title"
                  placeholder="Title (required)"
                  required
                ></TextField>
                <TextField
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  label="Author"
                  placeholder="Author (required)"
                  required
                ></TextField>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Books;
