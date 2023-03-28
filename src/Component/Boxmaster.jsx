import React from "react";

export default function Footer() {
  return (
    <>

      <div className="masterbox">

        <h1 className="titulo">Join our community</h1>
        <h2 className="titulo1">30-day, hassle free money back guarante</h2>
        <p className="parrafo1"> gain access to uor full library of tutorials along with expert code reviews.<br/>perfect for any developers who are serious about their skills </p>
      </div>
      <div className="container3">
        <div className="box2">

          <h2 className="titulo2">Monthly Subcription</h2>
          <p className="numero"><b className="num">$29</b>   per month</p>
          <p className="texto">full access for less than $1 a day </p>
          <button className="boton">Sing Up</button>
        </div>

        <div className="box3">
          <h2 className="titulo2">Why Us</h2>
          <p className="texto2">tutorials by industry experts <br/> peer & expert code review<br/> coding exercises <br/>Access touor gitHub repos <br/>Community forum<br/> flashcard decks <br/>New videos every week</p>
        </div>
      </div>
    </>
  );
}
