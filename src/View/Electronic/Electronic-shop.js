
import "./Electronic-shop.css"
function Electronic(){
    return(<>
      <div className="main-container">
           <p className="main-heading"> Eelectronic Shop</p>  <br/>          
           
           <div className="dic-container"> <p className="dec-heading"> Get discount prices up to 50% special just for you, 
            <br/> and get dozens of other attractive prizes </p>
           </div>
           <img src=" ./image/Ele-img/Eelectronic.jpg "  className = "img" />
      
            <div className="Address-box" > 
               <span className="Address-text"> 
               <img src="./image/Ele-img/placeholder.png" className="Address-img"/>Near Wadi 24034 ,  New City Nagpur</span>
            </div>

            <div class="Discout-box">
               <span class="offer-text"> 50% <br/> OFF </span>
            </div>
            <div className="logo-container">
               <img src="./image/Ele-img/whatsapp.png"  className="logo"/>
                <p className="mobile-no"> 9172319749</p>
            </div>
      </div>
   </>);
}

export default Electronic;
    