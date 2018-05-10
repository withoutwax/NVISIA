import React, { Component } from 'react';
import './BlogArticles.css';

class BlogArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      thumbnail: props.thumbnail,
      date: props.date,
      author: props.author,
      info: props.info,
    }
  }
    render() {
      return (
        <section className="blog-article-container margin-bottom-20">
          <img src={this.state.thumbnail} width="400px" alt="blog-article"/>
          <article className="padding-left-20 padding-right-20">
            <h4>{this.state.title}</h4>
            <p>{this.state.date} | {this.state.author}</p>
            <br />
            <p>{this.state.info}</p>
          </article>
        </section>
      );
    }
}

export default BlogArticles;
