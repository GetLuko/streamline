import { Box, InputNumber, Text } from '@getluko/streamline';
import { useState } from 'react';

const SectionTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Box marginBottom="sm" marginTop="lg">
      <Text variant="titleMediumBold">{title}</Text>
      <Text variant="subBody">{desc}</Text>
    </Box>
  );
};

export const InputNumberSandbox = () => {
  const [code, setCode] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [isError, setIsError] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  // Fake API call with invalid code, then set isError to true
  const handleErrorCodeChange = (value: string) => {
    setErrorCode(value);
    if (value.length > 0) {
      setIsError(false);
    }

    if (value.length === 6) {
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
        setIsError(true);
      }, 1000);
    }
  };

  return (
    <Box margin="lg">
      <SectionTitle
        title="InputNumber with error"
        desc="Fake API call with invalid code, then set isError to true"
      />
      <InputNumber
        code={errorCode}
        onChange={handleErrorCodeChange}
        isError={isError}
        length={6}
        isDisabled={isDisabled}
      />
      <SectionTitle title="InputNumber with 4 digits" desc="" />
      <InputNumber code={code} onChange={setCode} length={6} />
      <SectionTitle
        title="Disabled InputNumber"
        desc="Should not be interactive"
      />
      <InputNumber
        code=""
        onChange={() => {
          return;
        }}
        length={6}
        isDisabled
      />
    </Box>
  );
};
