import { Appearance, Box, ButtonIcon } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const Separator = () => <Box marginRight="xs" marginTop="md" />;

const ButtonsSizeFamily = ({
  appearance,
  size,
}: {
  appearance: Appearance;
  size: 'regular' | 'large';
}) => {
  return (
    <Box flexDirection="row">
      <ButtonIcon
        accessibilityLabel="test"
        appearance={appearance}
        iconName="Area"
        size={size}
        withContainer
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        appearance={appearance}
        iconName="Area"
        isDisabled
        size={size}
        withContainer
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        appearance={appearance}
        iconName="Area"
        isLoading
        size={size}
        withContainer
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        appearance={appearance}
        iconName="Area"
        size={size}
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        appearance={appearance}
        iconName="Area"
        isDisabled
        size={size}
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        appearance={appearance}
        iconName="Area"
        isLoading
        size={size}
      />
    </Box>
  );
};

const ButtonsFamily = ({ appearance }: { appearance: Appearance }) => {
  return (
    <>
      <ButtonsSizeFamily appearance={appearance} size="large" />
      <Separator />
      <ButtonsSizeFamily appearance={appearance} size="regular" />
      <Separator />
    </>
  );
};

const BUTTONS: JSX.Element[] = [
  <ButtonsFamily appearance="primary" />,
  <ButtonsFamily appearance="neutral" />,
  <ButtonsFamily appearance="warning" />,
  <ButtonsFamily appearance="danger" />,
  <ButtonsFamily appearance="dark" />,
  <ButtonsFamily appearance="light" />,
  <Box flexDirection="row">
    <ButtonIcon
      accessibilityLabel="test"
      isSkeleton
      iconName="Area"
      size="large"
    />
    <Separator />
    <ButtonIcon accessibilityLabel="test" isSkeleton iconName="Area" />
  </Box>,
];

export const ButtonIconSandbox = () => <DocList docs={BUTTONS} margin="md" />;
