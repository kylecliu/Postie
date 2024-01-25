import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const [items, setItems] = useState([]);

  function newInput(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setInput((prev) => ({
        title: value,
        content: prev.content,
      }));
    } else if (name === "content") {
      setInput((prev) => ({
        title: prev.title,
        content: value,
      }));
    }
  }

  function addItem() {
    setItems((prev) => [...prev, input]);

    setInput({
      title: "",
      content: "",
    });
  }

  function deleteItem(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addItem} newInput={newInput} input={input} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
