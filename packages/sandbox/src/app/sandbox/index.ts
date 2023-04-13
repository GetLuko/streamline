import { BoxSandbox } from './docs/box.doc';
import { ButtonIconSandbox } from './docs/button-icon.doc';
import { ButtonMiniSandbox } from './docs/button-mini.doc';
import { ButtonSandbox } from './docs/button.doc';
import { CardCalloutSandbox } from './docs/card-callout.doc';
import { CardSandbox } from './docs/card.doc';
import { CardTipSandbox } from './docs/card-tip.doc';
import { CheckboxSandbox } from './docs/checkbox.doc';
import { IconsSandbox } from './docs/icon.doc';
import { InputTextAreaSandbox } from './docs/input-text-area.doc';
import { InputTextTypesSandbox } from './docs/input-text-types.doc';
import { InputTextSandbox } from './docs/input-text.doc';
import { ListItemSandbox } from './docs/list-item.doc';
import { SkeletonSandbox } from './docs/skeleton.doc';
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
      { title: 'Skeleton', SandBox: SkeletonSandbox },
      { title: 'Spinner', SandBox: SpinnerSandbox },
    ],
  },
  {
    title: 'Buttons',
    items: [
      { title: 'Button', SandBox: ButtonSandbox },
      { title: 'Button Icon', SandBox: ButtonIconSandbox },
      { title: 'Button Mini', SandBox: ButtonMiniSandbox },
    ],
  },
  {
    title: 'Cards',
    items: [
      { title: 'Card', SandBox: CardSandbox },
      { title: 'CardCallout', SandBox: CardCalloutSandbox },
      { title: 'CardTip', SandBox: CardTipSandbox },
    ],
  },
  {
    title: 'Inputs',
    items: [
      { title: 'InputText', SandBox: InputTextSandbox },
      { title: 'InputText Types', SandBox: InputTextTypesSandbox },
      { title: 'InputTextArea', SandBox: InputTextAreaSandbox },
      { title: 'CheckBox', SandBox: CheckboxSandbox },
    ],
  },
  {
    title: 'List Items',
    items: [{ title: 'ListItem', SandBox: ListItemSandbox }],
  },
  {
    title: 'Tags',
    items: [{ title: 'Tag', SandBox: TagSandbox }],
  },
];
