import React, { useMemo, useState } from 'react';
import { sandboxItems } from '.';
import { Box, Icon, Text } from '@getluko/streamline';
import { filterSections } from './sandbox.util';
import { TouchableOpacity } from 'react-native';

const ListItem = ({
  title,
  testID,
  onAction,
}: {
  title: string;
  testID: string;
  onAction: () => void;
}) => (
  <TouchableOpacity onPress={onAction}>
    <Box
      backgroundColor="PURE_WHITE_1000"
      marginBottom="xs"
      padding="xs"
      borderRadius="md"
    >
      <Text testID={testID} variant="headline">
        {title + ' >'}
      </Text>
    </Box>
  </TouchableOpacity>
);

const GroupItem = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode[];
}) => (
  <Box backgroundColor="GREY_100" margin="lg" padding="sm" borderRadius="xl">
    <Text variant="titleLarge" paddingBottom="xs">
      {title}
    </Text>
    {children}
  </Box>
);

const BackButton = ({
  onPress,
  testID,
  title,
}: {
  onPress: () => void;
  testID?: string;
  title: string;
}) => (
  <TouchableOpacity onPress={onPress}>
    <Box margin="lg" testID={testID} alignItems="flex-end" flexDirection="row">
      <Icon
        iconName="ArrowLeft"
        color="BLACK"
        containerStyle={{ padding: 18 }}
      />
      <Text variant="titleLarge">{title}</Text>
    </Box>
  </TouchableOpacity>
);

export const SandBox = () => {
  const [page, setPage] = useState<{ groupIndex: number; index: number }>();
  const [search /*, setSearch*/] = useState<string>('');
  /* TODO: implement Search when Input ready
  const handleChangeSearch = useCallback((newSearch: string) => {
    setSearch(newSearch);
  }, []);*/

  const sections = useMemo(() => {
    const searchFormated = search.toLowerCase();
    if (search === '') {
      return sandboxItems;
    }
    return filterSections(searchFormated, sandboxItems);
  }, [search]);

  const renderList = useMemo(
    () => (
      <>
        {sections.map((group, groupIndex) => (
          <GroupItem key={group.title} title={group.title}>
            {group.items.map(({ title }, index) => (
              <ListItem
                key={title}
                title={title}
                testID={title}
                onAction={() => {
                  setPage({ groupIndex, index });
                  console.log('ok ok:: ', groupIndex, index);
                }}
              />
            ))}
          </GroupItem>
        ))}
        <Text>Bottom</Text>
      </>
    ),
    [sections]
  );
  if (page) {
    const selection = sandboxItems[page.groupIndex].items[page.index];
    const Component = selection.SandBox;
    return (
      <>
        <BackButton
          title={selection.title}
          onPress={() => {
            setPage(undefined);
          }}
        />
        <Component />
      </>
    );
  }
  return renderList;
};
