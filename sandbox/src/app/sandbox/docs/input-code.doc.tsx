import { Box, InputCode, Text } from '@getluko/streamline';
import { useEffect, useState } from 'react';

const SectionTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Box marginBottom="sm" marginTop="lg">
      <Text variant="titleMediumBold">{title}</Text>
      <Text variant="subBody">{desc}</Text>
    </Box>
  );
};

export const InputCodeSandbox = () => {
  const [isError, setIsError] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    if (code.length > 0) {
      setIsError(false);
    }

    if (code.length === 6) {
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
        setIsError(true);
      }, 1000);
    }
  }, [code, setIsError, setIsDisabled]);

  return (
    <Box marginHorizontal="lg">
      <SectionTitle
        title="InputCode with error"
        desc="Fake API call with invalid code, then set isError to true"
      />
      <InputCode
        onChange={setCode}
        isError={isError}
        length={6}
        isDisabled={isDisabled}
      />
      <SectionTitle title="InputCode with 4 digits" desc="" />
      <InputCode
        onChange={() => {
          return;
        }}
        length={4}
      />
      <SectionTitle
        title="Disabled InputCode"
        desc="Should not be interactive"
      />
      <InputCode
        onChange={() => {
          return;
        }}
        length={6}
        isDisabled
      />
    </Box>
  );
};
