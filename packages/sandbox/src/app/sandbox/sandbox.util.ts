import { SandBoxSectionType } from '.';

export const filterSections = (
  search: string,
  sections: SandBoxSectionType[]
) => {
  return sections
    .filter(
      (s) =>
        s.title.toLowerCase().includes(search) ||
        s.items.some((item) => item.title.toLowerCase().includes(search))
    )
    .map((s) => {
      const filteredItems = s.items.filter((item) =>
        item.title.toLowerCase().includes(search)
      );
      if (filteredItems.length === 0) {
        return s;
      }
      return {
        ...s,
        items: filteredItems,
      };
    });
};
