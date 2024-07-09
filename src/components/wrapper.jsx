import { Children } from "react";
import '../App.css'
const wrapper  = ({Children})=>{
    return (
        <div className="wrapper">
           
 {Children}
 
        </div>
    )
}

export default wrapper