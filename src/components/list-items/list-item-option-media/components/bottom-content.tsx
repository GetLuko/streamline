import { Text } from '../../../../primitives/text/text';

interface Props {
  isSelected?: boolean;
  isDisabled?: boolean;
  title: string;
}

export const BottomContent = ({ isSelected, isDisabled, title }: Props) => {
  const color = isDisabled ? 'GREY_500' : 'GREY_1000';
  return (
    <Text
      marginTop="md"
      color={isSelected ? 'BLUKO_500' : color}
      variant="bodyBold"
    >
      {title}
    </Text>
  );
};
