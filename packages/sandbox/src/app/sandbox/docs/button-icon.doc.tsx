import { Box } from '@getluko/streamline';
import { ButtonIcon } from '@getluko/streamline';

const Separator = () => <Box marginTop="md" />;

export const ButtonIconSandbox = () => (
  <Box paddingHorizontal="xl" flexDirection="row">
    <Box marginRight="md">
      <ButtonIcon
        accessibilityLabel="test"
        iconName="Cross"
        appearance="primary"
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        iconName="Cross"
        appearance="secondary"
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        iconName="Cross"
        appearance="neutral"
      />
      <Separator />
      <ButtonIcon
        accessibilityLabel="test"
        iconName="Cross"
        appearance="danger"
      />
      <Separator />
      <ButtonIcon accessibilityLabel="test" iconName="Cross" isLoading />
      <Separator />
      <ButtonIcon accessibilityLabel="test" iconName="Cross" isDisabled />
    </Box>
    <Box marginRight="md">
      <ButtonIcon
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="primary"
      />
      <Separator />
      <ButtonIcon
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="secondary"
      />
      <Separator />
      <ButtonIcon
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="neutral"
      />
      <Separator />
      <ButtonIcon
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="danger"
      />
      <Separator />
      <ButtonIcon
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        isLoading
      />
      <Separator />
      <ButtonIcon
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        isDisabled
      />
    </Box>
    <Box marginRight="md">
      <ButtonIcon
        size="large"
        accessibilityLabel="test"
        iconName="Cross"
        appearance="primary"
      />
      <Separator />
      <ButtonIcon
        size="large"
        accessibilityLabel="test"
        iconName="Cross"
        appearance="secondary"
      />
      <Separator />
      <ButtonIcon
        size="large"
        accessibilityLabel="test"
        iconName="Cross"
        appearance="neutral"
      />
      <Separator />
      <ButtonIcon
        size="large"
        accessibilityLabel="test"
        iconName="Cross"
        appearance="danger"
      />
      <Separator />
      <ButtonIcon
        size="large"
        accessibilityLabel="test"
        iconName="Cross"
        isLoading
      />
      <Separator />
      <ButtonIcon
        size="large"
        accessibilityLabel="test"
        iconName="Cross"
        isDisabled
      />
    </Box>
    <Box marginRight="md">
      <ButtonIcon
        size="large"
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="primary"
      />
      <Separator />
      <ButtonIcon
        size="large"
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="secondary"
      />
      <Separator />
      <ButtonIcon
        size="large"
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="neutral"
      />
      <Separator />
      <ButtonIcon
        size="large"
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        appearance="danger"
      />
      <Separator />
      <ButtonIcon
        size="large"
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        isLoading
      />
      <Separator />
      <ButtonIcon
        size="large"
        withContainer
        accessibilityLabel="test"
        iconName="Cross"
        isDisabled
      />
    </Box>
  </Box>
);
