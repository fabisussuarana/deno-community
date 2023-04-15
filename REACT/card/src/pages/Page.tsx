import React from 'react';
import Card from '../components/Card';

const Page = () => {
  return (
    <>
      <h1>PCs</h1>
      <Card title='Pc 1' description='descrição do pc' rate={2}></Card>
    </>
  );
}

export default Page;