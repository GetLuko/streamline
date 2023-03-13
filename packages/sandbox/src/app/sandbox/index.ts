import { BoxSandbox } from './docs/box.doc';
import { ButtonMiniSandbox } from './docs/button-mini.doc';
import { ButtonSandbox } from './docs/button.doc';
import { CardSandbox } from './docs/card.doc';
import { IconsSandbox } from './docs/icon.doc';
import { SpinnerSandbox } from './docs/spinner.doc';
import { TagSandbox } from './docs/tag.doc';
import { TypoSandbox } from './docs/text.doc';

type SandBoxItemType = {
  title: string;
  SandBox: () => JSX.Element;
};

export type SandBoxSectionType = {
  title: string;
  items: SandBoxItemType[];
};

export const sandboxItems: SandBoxSectionType[] = [
  {
    title: 'Foundation',
    items: [
      { title: 'Box', SandBox: BoxSandbox },
      { title: 'Icons', SandBox: IconsSandbox },
      { title: 'Typo', SandBox: TypoSandbox },
      { title: 'Card', SandBox: CardSandbox },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', SandBox: ButtonSandbox },
      { title: 'Button Mini', SandBox: ButtonMiniSandbox },
      { title: 'Spinner', SandBox: SpinnerSandbox },
      { title: 'Tag', SandBox: TagSandbox },
    ],
  },
];
