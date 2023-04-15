import React from "react";

interface Props {
  title: string;
  description: string;
  rate: number;
}

import styled from "./card.module.css";

const Card = ({ title, description, rate }: Props) => {
  return (
    <>

      <h1>{title}</h1>
      <p>{description}</p>

      {rate <= 2 && (
        <p className={styled.buttonPrimary}>Avaliação baixa</p>
      )}

      {rate > 2 && (
        <p className={styled.buttonPrimary}>Avaliação alta</p>
      )}
      
    </>
  );
};

export default Card;
