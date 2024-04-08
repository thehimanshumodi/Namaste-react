// const heading = React.createElement("h1", 
// {id: "hello",className:"wolrd"}, "hello wolrd reactjs"
// );

// console.log("heading");  //object


//  const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading); 
    
 /**    nested  element
        <div id="parent">
            <div id=“child”>  
                 <h1> text </h1>
            </div>
        </div>
 */

const parent = React.createElement("div",{id : 'parent'},
    React.createElement("div", {id : 'child'}, 
    [React.createElement("h1", {}, "hello i m h1 tag"),
     React.createElement("h2", {}, "i am h2 tag")]
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 

