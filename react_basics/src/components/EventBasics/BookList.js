import React from "react";
import ReactDOM from "react-dom";
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51CvNtFCbZL._SX481_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/518E56QKfQL._SX367_BO1,204,203,200_.jpg",
    title: "Our Class is a Family ",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51d-0+tB4sL._SX386_BO1,204,203,200_.jpg",
    title: "Brilliant Brain",
    author: "Lokesh jawale",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello Loki");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>reference Example</button>
      <button onClick={() => complexExample(author)}>Complex Example</button>
    </article>
  );
};

export default BookList;
