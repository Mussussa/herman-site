import homeImg from "../assets/home.jpg";
const Hero = () =>{

    


    return(
        <div className= "vh-100 w-100 overflow-hidden" style={{height: "100px" , }}>
            <img src={homeImg} className="img-fluid w-100 h-100 object-fit-cover" alt="entra do Hotel"></img>

    </div>
    );

}

export default Hero