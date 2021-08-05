import React from 'react'
import styled from 'styled-components'

const ContainerDetalhesServico = styled.div ` 
  background-color: red;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

const CardDetalhesServico = styled.div ` 
  
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
`

const ButtonCard = styled.button ` 
  width: 100%;
`

export default class CadastrarServico extends React.Component {
  render() {
    return (
      <ContainerDetalhesServico>
        <CardDetalhesServico>
          <h1>Titulo do serviço (vindo da integraçao)</h1>
            <h4>Até (Prazo vindo da integração) por (Valor vindo da integraçao)</h4>
            <h5>(Descrição vindo da integração)</h5>
            <ButtonCard>ADICIONAR AO CARRINHO</ButtonCard>
            <ButtonCard>VOLTAR PARA LISTA</ButtonCard>
        </CardDetalhesServico>
      </ContainerDetalhesServico>
    )
  }
}
