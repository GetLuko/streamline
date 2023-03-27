import { Box, Tag } from '@getluko/streamline';

const ICON_NAME = 'Area';

export const TagSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs" alignItems="flex-end" flexDirection="row">
      <Box padding="xxs">
        <Tag appearance="primary" iconName={ICON_NAME} text="Primary" />
      </Box>
      <Box padding="xxs">
        <Tag appearance="primary" isSmall iconName={ICON_NAME} text="Primary" />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-end" flexDirection="row">
      <Box padding="xxs">
        <Tag appearance="secondary" iconName={ICON_NAME} text="Secondary" />
      </Box>
      <Box padding="xxs">
        <Tag
          appearance="secondary"
          isSmall
          iconName={ICON_NAME}
          text="Secondary"
        />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-end" flexDirection="row">
      <Box padding="xxs">
        <Tag appearance="success" iconName={ICON_NAME} text="Success" />
      </Box>
      <Box padding="xxs">
        <Tag appearance="success" isSmall iconName={ICON_NAME} text="Success" />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-end" flexDirection="row">
      <Box padding="xxs">
        <Tag appearance="warning" iconName={ICON_NAME} text="Warning" />
      </Box>
      <Box padding="xxs">
        <Tag appearance="warning" isSmall iconName={ICON_NAME} text="Warning" />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-end" flexDirection="row">
      <Box padding="xxs">
        <Tag appearance="danger" iconName={ICON_NAME} text="Danger" />
      </Box>
      <Box padding="xxs">
        <Tag appearance="danger" isSmall iconName={ICON_NAME} text="Danger" />
      </Box>
    </Box>
  </Box>
);
