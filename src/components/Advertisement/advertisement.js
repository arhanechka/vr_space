
import './advertisement.css';
import image from "../../assets/adv.jpg";

function Advertisment(props) {
    return (
        <div className="flex-container">
        <div className="image-block">
          <img src={image} alt="Image" />
        </div>
        <div className="text-block">
        <div className="text-block">
        <p>Unleash the World of<br /><strong>EXCLUSIVE FREE-ROAM VIRTUAL REALITY IN SETUBAL</strong><br />Unprecedented Virtual Reality encounters you won't find elsewhere.<br /><br />Unleash your exploration<br />Ample space for movement within an area as vast as a tennis court.<br /><br />Wireless, boundless movement<br />Experience freedom as you move without constraints or cables.<br /><br />Shared entertainment for all<br />Up to 4 friends can enjoy collective gameplay.</p>
      </div>
      <div className="bookButton"
      onClick={()=>props.routeChange(props.path)}
      >
          <a href="#">Book now</a>
        </div>

        </div>
      </div>
    );
  }
  export default Advertisment;