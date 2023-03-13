import { BoxSandbox } from './docs/box.doc';
import { ButtonIconSandbox } from './docs/button-icon';
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
      { title: 'Card', SandBox: CardSandbox },
      { title: 'Icons', SandBox: IconsSandbox },
      { title: 'Typo', SandBox: TypoSandbox },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', SandBox: ButtonSandbox },
      { title: 'Button Icon', SandBox: ButtonIconSandbox },
      { title: 'Button Mini', SandBox: ButtonMiniSandbox },
      { title: 'Spinner', SandBox: SpinnerSandbox },
      { title: 'Tag', SandBox: TagSandbox },
    ],
  },
];
