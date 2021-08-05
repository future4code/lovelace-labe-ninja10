import React from 'react'
import styled from 'styled-components'

const ContainerCadastrarServico = styled.div ` 
  background-color: ;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

const FormularioCadastrarServico = styled.form ` 
  
  display: flex;
  flex-direction: column;

  width: 30%;
`

export default class CadastrarServico extends React.Component {
  render() {
    return (
      <ContainerCadastrarServico>
        <h1>Cadastro de serviço</h1>
        <FormularioCadastrarServico>
          <input placeholder="Titulo" type="text"></input>
          <input placeholder="Descricao" type="text"></input>
          <input placeholder="Preço" type="number"></input>
          <input placeholder="Prazo" type="date"></input>
          <button>Cadastrar</button>
        </FormularioCadastrarServico>
      </ContainerCadastrarServico>
    )
  }
}
