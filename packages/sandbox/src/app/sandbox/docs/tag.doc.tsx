import { Box, Button, Tag } from '@getluko/streamline';

const TEXT = 'Tag';
const ICON_NAME = 'Area';

export const TagSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs" alignItems="flex-start">
      <Box paddingVertical="xxs">
        <Tag appearance="primary" iconName={ICON_NAME} text={TEXT} />
      </Box>
      <Box paddingVertical="xxs">
        <Tag appearance="primary" isSmall iconName={ICON_NAME} text={TEXT} />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-start">
      <Box paddingVertical="xxs">
        <Tag appearance="secondary" iconName={ICON_NAME} text={TEXT} />
      </Box>
      <Box paddingVertical="xxs">
        <Tag appearance="secondary" isSmall iconName={ICON_NAME} text={TEXT} />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-start">
      <Box paddingVertical="xxs">
        <Tag appearance="success" iconName={ICON_NAME} text={TEXT} />
      </Box>
      <Box paddingVertical="xxs">
        <Tag appearance="success" isSmall iconName={ICON_NAME} text={TEXT} />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-start">
      <Box paddingVertical="xxs">
        <Tag appearance="warning" iconName={ICON_NAME} text={TEXT} />
      </Box>
      <Box paddingVertical="xxs">
        <Tag appearance="warning" isSmall iconName={ICON_NAME} text={TEXT} />
      </Box>
    </Box>
    <Box paddingVertical="xxs" alignItems="flex-start">
      <Box paddingVertical="xxs">
        <Tag appearance="danger" iconName={ICON_NAME} text={TEXT} />
      </Box>
      <Box paddingVertical="xxs">
        <Tag appearance="danger" isSmall iconName={ICON_NAME} text={TEXT} />
      </Box>
    </Box>
  </Box>
);
