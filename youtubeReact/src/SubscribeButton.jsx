//presentation 4 События и состояние
//task1
// import { Component } from "react";
// class SubscribeButton extends Component{
//     clickHandler = (event) =>{
//         console.log('Button click!');
//     }
//     render(){
//         return(
//             <>
//             <button type="button" onClick={this.clickHandler}>Subscribe</button>
            
//             </>
//         )
//     }
// }
// export default SubscribeButton

//state task2
// import { Component } from "react";
// class SubscribeButton extends Component{
//     state = {
//         message: 'Click here!',
//     }
//     render(){
//         console.log(this.state);
//         const {message} = this.state
//         return(
//             <>
//             <button>{message}</button>
//             </>
//         )
//     }
// }
// export default SubscribeButton


//setState task3
// import { Component } from "react";
// import './index.css'
// class SubscribeButton extends Component{
//     state = {
//         text: 'Subscribe',
//         subscribed: false,
//     }
    // subscribed = ()=>{
    //     this.setState({text:'Subscibed', subscribed: true})
    // }
//    render(){
//     const { text, subscribed } = this.state;
//     let className = "subscribe-button";
//     if(!subscribed){
//         className += ' subscribe-button_red'
//     }
//     else{
//         className += " subscribe-button_grey"
//     }
//     return(
//         <>
//         <button className={className} type="button"  onClick={this.subscribed}>{text}</button>
//         </>
//     )
//    }
// }
// export default SubscribeButton

//task4
// import { Component } from "react";
// import './index.css'
// class SubscribeButton extends Component{
//     state = {
//         text: 'Click',
//         clicked: false,
//     }
//     clicked = ()=>{
//         this.setState({text: 'Clicked',clicked: true})
//         console.log('hello');
//     }
//     render(){
//         let className = 'subscribe-button'
//         const {text, clicked} = this.state
//         if(!clicked){
//             className += ' subscribe-button_red'
//         }
//         else{
//             className += ' subscribe-button_blue'
//         }
//         return(
//             <>
//             <button className={className} type="button" onClick={this.clicked}> 
//                 {text}
//             </button> 
//             </>
//         )
//     }
// }
// export default SubscribeButton