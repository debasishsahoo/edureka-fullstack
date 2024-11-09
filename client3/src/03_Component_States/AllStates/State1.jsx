import React from "react";
import "./State1.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img:'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
      alt:'user Image',
      name:'User',
      job:'Demo'
    };
  }


male=()=>{
  this.setState(
    {
      img:'https://www.w3schools.com/howto/img_avatar.png',
      alt:'Male Image',
      name:'John Doe',
      job:'Architect & Engineer'
    }
  )
}


female=()=>{
  this.setState(
    {
      img:'https://www.w3schools.com/howto/img_avatar2.png',
      alt:'FeMale Image',
      name:'Srabani Roy',
      job:'Interior Designer'
    }
  )
}



  render() {
    return (
      <>
        <h2>CARD</h2>
        <div className="card">
          <img src={this.state.img} alt={this.state.alt} />
          <div className="container">
            <h4>
              <b>{this.state.name}</b>
            </h4>
            <br />
            <p>{this.state.job}</p>
          </div>
        </div>
        <div className="card">
          <button className="button" type="button" onClick={this.male}>
            Male
          </button>
          <button className="button" type="button" onClick={this.female}>
            FeMale
          </button>
        </div>
      </>
    );
  }
}

export default Card;
