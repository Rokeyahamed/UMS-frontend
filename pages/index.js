import MyLayout from "./component/layout"
import  Header  from "./component/header"
export default function Home(){
    // const names =[ 'rokey' , 'rashed', 'rifat' ];
    return(
        <>
       
        <h1> Home page </h1>


        <a href="/signup"> signup </a>
        <a href="/signin">signin </a>
        <a href="/about">About Us</a>
        


        {/* <ul>
            {
                names.map((name) =>(
                <li key={name}>{name}</li>  
                ))
            }
        </ul> */}



        </>
    )
}