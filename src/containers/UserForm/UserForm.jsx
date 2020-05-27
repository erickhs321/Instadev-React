import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";
import UserProfile from "../UserProfile";

import "./UserForm.scss";

const UserForm = () => {
  const [showSucessMessage, setShowSucessMessage] = useState(false);
  return (
    <React.Fragment>
      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Fulano da Silva"
              value="John Doe"
            />
            <label>Usuário</label>
            <input
              type="text"
              placeholder="Ex: fulano_da_silva"
              value="johndoe"
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Ex: fulano@provedor.com"
              value="johndoe@gmail.com"
            />
            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input type="text" placeholder="http://..." />
            <button type="button" onClick={() => setShowSucessMessage(true)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>
      {showSucessMessage && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
