import React, { useEffect, useState } from 'react';
import validate from '../helpers/validate';
import styled from '@emotion/styled';

interface Props {
  digits: string;
}

interface ParagraphProps {
  isVisible: boolean;
  isValid: boolean;
}

const Paragraph = styled.p<ParagraphProps>(
  {
    fontSize: '16px',
    color: '#20203b',
  },
  ({ isVisible, isValid }) => ({
    opacity: isVisible ? 1 : 0,

    '& > strong': {
      color: isValid ? '#74c51d' : '#eb002d',
    },
  })
);

export default ({ digits }: Props) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(validate(digits));
  }, [digits]);

  return (
    <Paragraph
      isValid={isValid}
      isVisible={digits.length > 0}
    >
      Your number is <strong>{isValid ? 'valid' : 'invalid'}</strong>
    </Paragraph>
  )
};
