import React from 'react'
import styled from 'styled-components'

const ContainerCarrinho = styled.div `   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

const CardCarrinho = styled.div ` 
    border: 1px solid black;

    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    width: 40%;
`

const ButtonCard = styled.button ` 
  width: 100%;
`

export default class CadastrarServico extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
          <CardCarrinho>
              <h3>(Titulo produto vindo da integração)</h3>
              <button>Deletar</button>
          </CardCarrinho>
            <h3>(Total produtos vindo da integração)</h3>
            <button>FINALIZAR PEDIDO</button>
            <button>VOLTAR</button>
      </ContainerCarrinho>
    )
  }
}
