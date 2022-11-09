import React from "react";
import Page from "../components/pageScope";

export default function CadastroGranja() {
  return (
    <Page title="Cadastrar Granja" subtitle="Cadastre sua granja">
      <div className="row">
        <div className="col-md-6">
          <div className="inputsCadastroGranja">
            <div className="inputField">
              <p>Nome Identificação</p>
              <input type="text" placeholder="ex.: Granja 1" />
            </div>

            <div className="inputField">
              <p>Acomodação</p>
              <input type="text" placeholder="ex.: 60.000" />
            </div>

            <div className="inputField">
              <p>Nome Identificação</p>
              <input type="text" placeholder="ex.: Granja 1" />
            </div>
            <button className="btnTask bgBlue btnAdd" onClick={() => console.log(true)}>
              Cadastrar
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="inputField">
            <p>Foto</p>
            <label htmlFor="fotoGranja" className="inputFoto">
              <img src="./img/canvas.png" alt="" />
              <input id="fotoGranja" type="file" placeholder="ex.: Granja 1" />
            </label>
          </div>
        </div>
      </div>
    </Page>
  );
}
