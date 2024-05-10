//presentation2
//task2
// import { Component } from "react";
// import ProductName from "./ProductName";
// import Price from "./Price";
// class Product extends Component{
//     render(){
//         return(
//             <>
//             <ProductName/>
//             <Price/>            
//             </>
//         )
//     }
// }
// export default Product



//presentation3
// import { Component } from "react";
// class Product extends Component{
//     render(){
//         return(
//             <>
//             <div className="product"></div>
//             <h3>{this.props.title}</h3>
//             <p>{this.props.price}</p>
//             </>
//         )
//     }
// }
// export default Product

//task1
// import { Component } from "react"
// class Product extends Component{
//     render(){
//         let message = "Нет в наличии"
//         if (this.props.isInStock) {
//           message = "";
//         }

//       return(
//         <>
//         <div className="wine">
//             <div>{message}</div>
//             <h3>{this.props.title}</h3>
//             <p>{this.props.description}</p>
//             <p>{this.props.rating}</p>
//         </div>
//         </>
//     )
// }
// }
// export default Product

//task2 
//деструкторизация 
// import { Component } from "react"
// class Product extends Component{
//     render(){
//         const {title ,description , rating , like} = this.props

//         let heart = ""
//         if (like) {
//           heart = "<3";
//         }

//       return(
//         <>
//         <div className="wine">
//             <h3>{title}</h3>
//             <p>{description}</p>
//             <p>{rating}</p>
//             <div>{heart}</div>
//         </div>
//         </>
//     )
// }
// }
// export default Product



