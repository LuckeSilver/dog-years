import React, { useState } from "react";

import "./styles.css";

import Animation from "../../components/Animation";

export default function Home() {
  const [idade, setIdade] = useState(1);
  const [porte, setPorte] = useState(undefined);

  function handleCalculate(e) {
    e.preventDefault();

    const lastYears = idade - 2;

    if (porte == 1) {
      if (idade <= 2) {
        document.getElementById(
          "result"
        ).innerHTML = `Seu cãozinho tem aproximadamente <span>${idade * 12.5} 
        anos </span> humanos.`;
      } else {
        document.getElementById(
          "result"
        ).innerHTML = `Seu cãozinho tem aproximadamente <span>${
          lastYears * 4.5 + 25
        } 
        anos </span> humanos.`;
      }
    } else if (porte == 2) {
      if (idade <= 2) {
        document.getElementById(
          "result"
        ).innerHTML = `Seu cãozinho tem aproximadamente <span>${idade * 10.5} 
        anos </span> humanos.`;
      } else {
        document.getElementById(
          "result"
        ).innerHTML = `Seu cãozinho tem aproximadamente <span>${
          lastYears * 5.7 + 21
        } 
        anos </span> humanos.`;
      }
    } else {
      if (idade <= 2) {
        document.getElementById(
          "result"
        ).innerHTML = `Seu cãozinho tem aproximadamente <span>${idade * 9} 
        anos </span> humanos.`;
      } else {
        document.getElementById(
          "result"
        ).innerHTML = `Seu cãozinho tem aproximadamente <span>${
          lastYears * 8 + 18
        } 
        anos </span> humanos.`;
      }
    }
  }

  return (
    <div className="container">
      <Animation />
      <form>
        <h3 id="result"></h3>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input
                type="number"
                name="idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                required
              />
              <span className="text">Idade do seu cão: </span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input
                name="porte"
                type="number"
                min="1"
                max="3"
                value={porte}
                onChange={(e) => setPorte(e.target.value)}
                required
              />
              <span className="text">
                De acordo com a raça, qual o porte do seu cão?
              </span>
              <span className="line"></span>
            </div>
            <h3>
              Digite <span>[1]</span> = pequeno | <span>[2]</span> = Médio |{" "}
              <span>[3]</span> = Grande
            </h3>
          </div>
          <div className="row100">
            <div className="col">
              <input onClick={handleCalculate} type="submit" value="CALCULAR" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
