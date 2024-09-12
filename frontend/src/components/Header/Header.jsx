import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <img src={assets.header_img} alt="" className="background-image"/>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisy your cravings and elevate your dining experience,
          one delicious meal at a time.
        </p>
        <button><a href="#explore-menu">View Menu</a></button>
        
      </div>
    </div>
  );
};

export default Header;
