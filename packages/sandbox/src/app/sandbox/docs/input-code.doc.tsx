import { Box, InputCode, Text } from '@getluko/streamline';
import { useState } from 'react';

const SectionTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Box marginBottom="sm" marginTop="lg">
      <Text variant="titleMediumBold">{title}</Text>
      <Text variant="subBody">{desc}</Text>
    </Box>
  );
};

export const InputCodeSandbox = () => {
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
        setTimeout(() => {
          // Fix to wait for disabled state to be updated on Android
          setIsError(true);
        }, 0);
      }, 1000);
    }
  };

  return (
    <Box marginHorizontal="lg">
      <SectionTitle
        title="InputCode with error"
        desc="Fake API call with invalid code, then set isError to true"
      />
      <InputCode
        code={errorCode}
        onChange={handleErrorCodeChange}
        isError={isError}
        length={6}
        isDisabled={isDisabled}
      />
      <SectionTitle title="InputCode with 4 digits" desc="" />
      <InputCode code={code} onChange={setCode} length={4} />
      <SectionTitle
        title="Disabled InputCode"
        desc="Should not be interactive"
      />
      <InputCode
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
