import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonSinve, InputSinve, Navbar, ProductHistory, ShowProductHistory,
} from '../../components';
import {
  RegisterContainer, Title, ProductContainer, TopProductContainer, Container, ButtonsContainer,
} from './style';

export const RegisterProduct: React.FC = () => {
  const history = useHistory();
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const didUserTapArrowButton = () => {
    setShowHistory(!showHistory);
  };

  return (
    <Container>
      <Navbar />
      <RegisterContainer>
        <Title>Cadastro de Produto</Title>
        <ProductContainer>

          <TopProductContainer>
            <InputSinve width="23%" title="Item" />
            <InputSinve width="74.5%" title="Produto" />
          </TopProductContainer>

          <TopProductContainer>
            <InputSinve width="25%" title="Data de Entrada" isSelectDate />
            <InputSinve width="25%" title="Data de Validade" isSelectDate />
            <InputSinve width="25%" title="Quantidade" />
            <InputSinve width="25%" title="Preço por unidade" />
          </TopProductContainer>

          <Title>Informações do Fornecedor</Title>

          <TopProductContainer>
            <InputSinve width="25%" title="CNPJ" />
            <InputSinve width="50%" title="Nome Fantasia" />
            <InputSinve width="25%" title="Telefone" />
          </TopProductContainer>
        </ProductContainer>
      </RegisterContainer>

      {
        showHistory ? <ShowProductHistory width="69%" onClick={didUserTapArrowButton} />
          : <ProductHistory width="69%" onClick={didUserTapArrowButton} />
      }

      <ButtonsContainer>
        <ButtonSinve title="Cadastrar produto" margin="0px 20px" />
        <ButtonSinve title="Voltar" margin="0px 20px" onClick={() => history.push('/')} />
      </ButtonsContainer>
    </Container>

  );
};
