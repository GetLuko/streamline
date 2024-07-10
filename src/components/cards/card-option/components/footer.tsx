import { Box } from '../../../../primitives/box/box';
import { Skeleton } from '../../../../primitives/skeleton/skeleton';
import { Text } from '../../../../primitives/text/text';
import Switch from '../../../switch/switch';
import Tag from '../../../tag/tag';
import { CardOptionProps } from '../card-option.types';

type Props = Pick<CardOptionProps, 'switchOption' | 'tagOption'>;

export const Footer = ({ switchOption, tagOption }: Props) => {
  const { isLoadingLabel, label, ...switchProps } = switchOption;
  const labelColor = switchProps.value ? 'GREY_1000' : 'GREY_500';

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      {isLoadingLabel ? (
        <Skeleton percentage={25} />
      ) : (
        <Box flexDirection="row" gap="xs">
          <Text color={labelColor} variant="bodyBold">
            {label}
          </Text>
          {tagOption ? <Tag {...tagOption} /> : null}
        </Box>
      )}
      <Box paddingLeft="md">
        <Switch {...switchProps} />
      </Box>
    </Box>
  );
};
