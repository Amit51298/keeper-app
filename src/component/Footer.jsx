import React from "react";

function footer(){
    const name = "Amit Kushwaha";
    const d = new Date();
    let year = d.getFullYear();

  return(
    <footer>
    <p className="footer">Copyright © {year} Created by {name}.</p>
    </footer>
  );
}

export default footer;