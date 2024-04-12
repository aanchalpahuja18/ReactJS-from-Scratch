const heading = React.createElement(
    "h1", 
    {id: "heading"},
     "Hello World from React"
    ) // creates a h1 element in react. createElement() takes 3 arguments as: 1. The tag name 2. Object in which anything will be passed will be treated as the attributes to the element -- h1 in this case 3. Text to be displayed in the created element
//Above basically creates an h1 element which is an object and not a tag.
//It is converted into the tag with the help of render method which is useful to display it on the browser.
console.log(heading); //This will be printed as an object
const root = ReactDOM.createRoot(document.getElementById("root")); // To put the h1 element into our DOM and making it visible in our browser we use DOM. Root is the place where all the react code will run just like the global space in JS

root.render(heading) // To append or put our heading element inside the root of React.
//The job of the root.render is to take the element tranform it into the html tags which is understood by the browser and display/contain it. 
//Above everything is done by React


//Nested elements in React 

const parent = React.createElement("div", {id: "parent"},
React.createElement("div", {id:"child"}, 
React.createElement("h1", {}, "I am an h1 element")
)
)

console.log(parent);
root.render(parent);


//To create siblings inside the tags
//To make more than 1 childern we can pass the 3rd argument of React.createElement as an array which will store the siblings in it.

const parent2 = React.createElement("div", {id: "parent2"},
React.createElement("div", {id:"child2"}, 
[React.createElement("h1", {}, "I am an h1 element"), React.createElement("h2", {}, "I am an h2 element")]
)
)

console.log(parent2);
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

console.log(nested)
root.render(nested)

