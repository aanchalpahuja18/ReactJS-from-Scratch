import React from "react"
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1", {id: "heading"}, "Day 3 of React");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxheadings = <h1 id="heading">Day 3 of React using JSX</h1>

console.log(jsxheadings);
//Now from this point itself we will never be using React.createElement() ever again.

root.render(heading);

root.render(jsxheadings);

const element = (
    <h2>Element inside element</h2>
 )
const jsxheadings2 = (<h1 className="heading">
    {element}
    Namaste React
</h1>)

root.render(jsxheadings2)

const HeadingComponent = () => {
    return <h1>Namaste React functional component hey</h1>
}

const HeadingComponent2 = () => (
<div id="container">
    {Title()} - 4. Since it is a JS expression so we can also call a function inside it and since Title is a functional component and at the end of the day they are just functions
<Title/> 
<Title></Title> - 3. Both are the same things
{jsxheadings2}  -     Adding a react element inside a component
<h2>How to add one component into another. Above is component composition</h2>
    <h1>Namaste React functional component</h1>
</div>
);

//Above both are same


const Title = () => (
    <h1>Day 3 of Learning React</h1>
) 


root.render(<HeadingComponent2/>)

const Heading = function () {
    return (
    <h2> Heyaa People! </h2>
    );
}
// root.render(<Heading/>)

//Note: Explore various tags in JSX
