import React from 'react';
import Card from '../../Card';

export default function SecondSession() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 bg-gray-100 '>
      <Card
        imageAlt='Alt'
        imageSrc='/images/clube.jpg'
        text='O clube da PM fica em St. de Clubes Esportivos Sul 1 3 - Lago Sul, Brasília - DF, 70200-001'
        title='O Clube'
        tags={['loca', 'endereço', 'copm']}
      />
      <Card
        imageAlt='Alt'
        imageSrc='/images/campo.jpg'
        text='O campo fica próximo as churrasqueiras, perto do matagal, evitar chutar bolas no lado/no mato'
        title='O campo'
        tags={['campo', 'local', 'churrasqueiras']}
      />
      <Card
        imageAlt='Alt'
        imageSrc='/images/bar.jpg'
        text='O bar é aberto aos jogadores mediante a pagamento no ato, não serão permitidos aos jogadores sair com items do bar sem o pagamento,'
        title='O bar '
        tags={['bar', 'regras', 'pagamentos']}
      />
    </div>
  );
}
