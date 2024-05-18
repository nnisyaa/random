//шаблон что бы каждый раз не писать
// class App extends Component{
//   render(){
//     return(
//       <>
//       </>
//     )
//   }
// }
// export default App

//const {isInStock, title, price} = this.props; //деструктуризация



//presentation2
//creating component
// import { Component } from "react";
// import "./index.css"// connecting css styles
// class App extends Component {
//   render() {
//     return (
//       <>
//         <h3>Nisa Hasratova</h3>
//         <p>Now I can create component</p>
//       </>
//     );
//   }
// }
// export default App;
//task1
// import { Component } from "react";
// import "./index.css"
// class App extends Component {
//   render() {
//     return (
//       <>
//       <div className="component">
//         <h3>Nisa Hasratova</h3>
//         <p>Now I can create component</p>
//       </div>
//       </>
//     );
//   }
// }
//task2
// import { Component } from "react";
// import Product from "./Product";
// class App extends Component{
//   render(){
//     return(
//       <>
//       <Product/>
//       </>
//     )
//   }
// }
// export default App



//presentation3
// import { Component } from "react";
// import Product from "./Product";
// class App extends Component{
//   render(){
//     return(
//       <>
//       <div className="product">
//         <Product 
//         title= "Golden by Jeon Jungkook"
//         price= "55"
//         />
//         <Product 
//         title= "Layover by Kim Taehyung"
//         price= "50"
//         />
//       </div>
//       </>
//     )
//   }
// }
// export default App


//task1
// import { Component } from "react";
// import Product from "./Product";
// import "./index.css"
// class App extends Component{
//   render(){
//     return(
//       <>
//       <Product
//       title = "Le Grand Noir"
//       description = "франция,розовое, 0.75л"
//       rating = "3.6"
//       isInStock
//       />
//       <Product
//       title = "Le Grand Noir"
//       description = "франция,розовое, 1л"
//       rating = "3"
//       isInStock = {false}
//       />
//       </>
//     )
//   }
// }
// export default App

//task2
// import { Component } from "react";
// import Product from "./Product";
// import "./index.css"
// class App extends Component{
//   render(){
//     return(
//       <>
//       <Product
//       title = "Le Grand Noir"
//       description = "франция,розовое, 0.75л"
//       rating = {3.6}
//       like 
//       />
//       </>
//     )
//   }
// }
// export default App



//presentation 4 События и состояние
//task1
// import SubscribeButton from "./SubscribeButton";
// import { Component } from "react";
// class App extends Component{
//   render(){
//     return(
//       <>
//       <SubscribeButton/>
//       </>
//     )
//   }
// }
// export default App

//state task2 
// import SubscribeButton from "./SubscribeButton";
// import { Component } from "react";
// class App extends Component{
//   render(){
//     return(
//       <>
//       <SubscribeButton/>
//       </>
//     )
//   }
// }
// export default App


//setState task3
// import { Component } from "react";
// import SubscribeButton from "./SubscribeButton";
// class App extends Component{
//   render(){
//     return(
//       <>
//       <SubscribeButton/>
//       </>
//     )
//   }
// }
// export default App


//task4
// import { Component } from "react";
// import SubscribeButton from "./SubscribeButton";
// class App extends Component{
//   render(){
//     return(
//       <>
//       <SubscribeButton/>
//       </>
//     )
//   }
// }
// export default App


//presentation5


//presentation 12 functional component
//task
// import Functional from "./Functional"
// export default function App(){
//     return(
//       <>
//       <Functional text = 'click' />
//       </>
//     )
// }


// task random-number
// import Functional from "./Functional"
// export default function App(){
//     return(
//       <>
//       <Functional/>
//       </>
//     )
// }

//task - + buttons and stock
import Functional from "./Functional"
export default function App(){
    return(
      <>
      <Functional/>
      </>
    )
}