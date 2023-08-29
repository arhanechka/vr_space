import { useNavigate } from "react-router-dom";
import "./button.css";


function BookButton(props) {

    return (
        <div class="wrap"  onClick={()=>props.routeChange(props.bookingpath)}> 
        <button class="button">Book now</button>
      </div>
    );
  }
  export default BookButton;