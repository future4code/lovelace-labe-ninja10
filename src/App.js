import React from 'react'
import CadastrarServico from './components/CadastrarServico';
import DetalhesServico from './components/DetalhesServico';
import Carrinho from './components/Carrinho';

export default class App extends React.Component {
	render() {
	  return (
		<div>
			<Carrinho></Carrinho>
		</div>
	  );
	}
  }


