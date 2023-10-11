import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function CreateNote(notesTerm){
  return(<Note
    key={notesTerm.key}
    title={notesTerm.title}
    content={notesTerm.content}
  />);
}
function App(){
  return (<div>
    <Header />
    {notes.map(CreateNote)}
    <Footer />
  </div>);
}

export default App;