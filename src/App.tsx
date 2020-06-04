import React, { useState, ChangeEvent } from 'react';
import LuhnValidation from './components/LuhnValidation';
import styled from '@emotion/styled';

const Root = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
  backgroundColor: '#f4f4fa',

  'h1': {
    textTransform: 'uppercase',
    fontSize: '21px',
    marginBottom: '40px',
  },

  'input': {
    width: '100%',
    maxWidth: '400px',
    border: '1px solid transparent',
    padding: '15px',
    fontSize: '18px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px',
    outline: 'none',
    textAlign: 'center',
  },
});

export default () => {
  const [digits, setDigits] = useState<string>('');

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => (
    (target.value.length === 0 || /^[0-9]*$/.test(target.value)) && setDigits(target.value)
  );

  return (
    <Root>
      <h1>Luhn-o-matic</h1>
      <input
        type="text"
        onChange={handleOnChange}
        value={digits}
        placeholder="Type your digits here"
      />
      <LuhnValidation digits={digits} />
    </Root>
  );
}
