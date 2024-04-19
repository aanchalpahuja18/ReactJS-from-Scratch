import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
/*
* Header
 - Logo
 - Nav Items
* Body
 - Search
 - Restaurant Container
   - Restaurant Card
     - image
     - name of the restaurant
     - star rating
     - cuisine
     - delivery time
* Footer
 - Copyright
 - Links
 - Address
 - Contact Us
*/


    


//not using keys (not acceptable) <<<<< indexes as keys <<<<<<<<<<<< unique key (best practice)

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)