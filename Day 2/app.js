import React from "react"
import ReactDOM from "react-dom/client"


const heading = React.createElement(
    "h1", 
    {id: "heading"},
     "Hello World from React"
    )

const root = ReactDOM.createRoot(document.getElementById("id"));

root.render(heading)

const parent = React.createElement("div", {id: "parent"},
React.createElement("div", {id:"child"}, 
React.createElement("h1", {}, "I am an h1 element")
)
)

root.render(parent);

const parent2 = React.createElement("div", {id: "parent2"},
React.createElement("div", {id:"child2"}, 
[React.createElement("h1", {}, "I am an h1 element"), React.createElement("h2", {}, "I am an h2 element")]
)
)


root.render(parent2);

const nested = React.createElement("div", {id: "nested"}, 
[React.createElement("div", {id: "nestedchild1"},
[React.createElement("h1", {}, "I am an h1 tag"), 
React.createElement("h2", {}, "I am an h2 tag")]),
React.createElement("div", {id: "nestedchild2"},
[React.createElement("h1", {}, "I am an h1 tag"), 
React.createElement("h2", {}, "I am an h2 tag")]
)]
)

root.render(nested)