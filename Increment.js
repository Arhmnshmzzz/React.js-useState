const domContainer = document.querySelector("#root");
const Increment = () => {
    const [counter , setCounter] = React.useState(0);
  return (
    <div>
      <h1 id="display">{counter}</h1>

      <div>
        <button id="button" onClick={()=> setCounter(counter + 1)}>Increment +</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Increment />, domContainer);



ReactDOM.render(
<div className="container">
    <Increment/>
    <Increment/>

</div>,
domContainer

);
// const myElement = (
//   <div>
//     <h1 id="display">0</h1>

//     <div>
//       <button id="button">Increment +</button>
//     </div>
//   </div>
// );


// let number = 0;
// const display = document.querySelector("#display");
// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   number++;
//   display.textContent = number;
// });

// const myElement = React.createElement("div", null,[

// React.createElement("p", null,"Hello World"),
// React.createElement("p", null,"Hello World"),

// ]);

// Another way///
// let p = document.createElement("p");
// p.innerHTML = "hello";
// domContainer.appendChild(p);
