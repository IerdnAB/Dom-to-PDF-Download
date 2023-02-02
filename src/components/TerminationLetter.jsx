import React, { useState } from "react";
import jsPDF from "jspdf";

const ResignationLetter = () => {
  const [letter, setLetter] = useState({
    recipient: "AMAZON DEVELOPMENT CENTER (ROMANIA) S.R.L.",
    sender: "",
    location: "",
    series: "",
    number: "",
    position: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLetter({
      ...letter,
      [name]: value,
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF("portrait");
    const { recipient, sender, date, series, number, position, location } =
      letter;
    doc.text(recipient, 10, 10);
    doc.text(`Catre: AMAZON DEVELOPMENT CENTER (ROMANIA) S.R.L.`, 10, 10);
    doc.text(`Domnule Administrator,`, 10, 15);
    doc.text(
      `Subsemnat${sender ? `a ${sender}` : ""}, domiciliat${
        sender ? "a" : ""
      } in ${location}, identificat${
        sender ? "a" : ""
      } prin seria ${series}, nr. ${number}, angajat${
        sender ? "a" : ""
      } in functia de ${position},`,
      10,
      20
    );
    doc.text(`in cadrul AMAZON DEVELOPMENT CENTER(ROMANIA) S.R.L.,`, 10, 25);
    doc.text(
      `cu sediul in Iasi, str. Sf.Lazar nr.27A, Cladirea United Business Center 5, et.2, Jud.Iasi, inregistrat${
        sender ? "a" : ""
      } in Registrul Comertului Iasi`,
      10,
      30
    );
    doc.text(`sub nr.J22/2621/2005, avand CUI 17810435, va`, 10, 35);
    doc.text(
      `rog sa aprobati cererea de incetare a contractului individual de munca, cu acordul partilor, in temeiul prevederilor art. 55,`,
      10,
      40
    );
    doc.text(
      `lit. b, din Legea nr.53/2003 - Codul Muncii, inceput cu data ${date}`,
      10,
      45
    );
    doc.text(`Sincerely,`, 10, 50);
    doc.text(`${sender}`, 20, 60);
    doc.save("resignation_letter.pdf");
  };

  return (
    <div>
      <form>
        <label>
          Sender:
          <input type="text" name="sender" onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};


export default ResignationLetter;