import React from "react";
import CadastrarServico from "./components/CadastrarServico";
import DetalhesServico from "./components/DetalhesServico";
import Carrinho from "./components/Carrinho";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
				<CadastrarServico></CadastrarServico>
				<DetalhesServico></DetalhesServico>
        <Carrinho></Carrinho>
      </div>
    );
  }
}
