import { Box } from '../../../../primitives/box/box';
import { Skeleton } from '../../../../primitives/skeleton/skeleton';
import { Text } from '../../../../primitives/text/text';
import Switch from '../../../switch/switch';
import { CardOptionProps } from '../card-option.types';

type Props = Pick<CardOptionProps, 'switchOption'>;

export const Footer = ({ switchOption }: Props) => {
  const { isLoadingLabel, label, ...switchProps } = switchOption;
  const labelColor = switchProps.value ? 'GREY_1000' : 'GREY_500';

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      {isLoadingLabel ? (
        <Skeleton percentage={25} />
      ) : (
        <Text color={labelColor} variant="bodyBold">
          {label}
        </Text>
      )}
      <Box paddingLeft="md">
        <Switch {...switchProps} />
      </Box>
    </Box>
  );
};
