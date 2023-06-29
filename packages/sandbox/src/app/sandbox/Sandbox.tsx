import {
  Box,
  Icon,
  InputSearch,
  ListItemGroup,
  Text,
} from '@getluko/streamline';
import React, { useCallback, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { sandboxItems } from '.';
import { filterSections } from './sandbox.utils';

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
  const [search, setSearch] = useState<string>('');

  const handleChangeSearch = useCallback((newSearch: string) => {
    setSearch(newSearch);
  }, []);

  const sections = useMemo(() => {
    const searchFormated = search.toLowerCase();
    if (search === '') {
      return sandboxItems;
    }
    return filterSections(searchFormated, sandboxItems);
  }, [search]);
  const renderList = useMemo(
    () => (
      <Box padding="md">
        <Box paddingBottom="md">
          <InputSearch placeholder="Search" onChangeText={handleChangeSearch} />
        </Box>
        {sections.map((group, groupIndex) => (
          <Box marginBottom="md" key={group.title}>
            <ListItemGroup
              title={group.title}
              items={group.items.map(({ title }, index) => ({
                key: title,
                title,
                onPress: () => setPage({ groupIndex, index }),
                testID: title,
              }))}
            />
          </Box>
        ))}
      </Box>
    ),
    [sections, handleChangeSearch]
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
