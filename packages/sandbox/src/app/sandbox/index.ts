import { ButtonDockSandbox } from './docs/button-dock.doc';
import { ButtonIconSandbox } from './docs/button-icon.doc';
import { ButtonMiniSandbox } from './docs/button-mini.doc';
import { ButtonSandbox } from './docs/button.doc';
import { CardCalloutSandbox } from './docs/card-callout.doc';
import { CardSummarySandbox } from './docs/card-summary.doc';
import { CardTipSandbox } from './docs/card-tip.doc';
import { CardSandbox } from './docs/card.doc';
import { CheckboxSandbox } from './docs/checkbox.doc';
import { DialogSandbox } from './docs/dialog.doc';
import { IconsSandbox } from './docs/icon.doc';
import { InputDatePickerSandbox } from './docs/input-date-picker.doc';
import { InputPhoneSandbox } from './docs/input-phone.doc';
import { InputTextAreaSandbox } from './docs/input-text-area.doc';
import { InputTextTypesSandbox } from './docs/input-text-types.doc';
import { InputTextSandbox } from './docs/input-text.doc';
import { ListItemArticleSandbox } from './docs/list-item-article.doc';
import { ListItemGroupSandbox } from './docs/list-item-group.doc';
import { ListItemOptionSandbox } from './docs/list-item-option.doc';
import { ListItemValueSandbox } from './docs/list-item-value.doc';
import { ListItemSandbox } from './docs/list-item.doc';
import { MarkdownSandbox } from './docs/markdown.doc';
import { NavigationBarProgressSandbox } from './docs/navigation-bar-progress.doc';
import { NavigationTitleSandbox } from './docs/navigation-title.doc';
import { ProgressBarSandbox } from './docs/progress-bar.doc';
import { RadioSandbox } from './docs/radio.doc';
import { ShadowSandbox } from './docs/shadows.doc';
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
      { title: 'Shadows', SandBox: ShadowSandbox },
      { title: 'Icons', SandBox: IconsSandbox },
      { title: 'Typo', SandBox: TypoSandbox },
      { title: 'Skeleton', SandBox: SkeletonSandbox },
      { title: 'Spinner', SandBox: SpinnerSandbox },
      { title: 'Markdown', SandBox: MarkdownSandbox },
    ],
  },
  {
    title: 'Buttons',
    items: [
      { title: 'Button', SandBox: ButtonSandbox },
      { title: 'ButtonIcon', SandBox: ButtonIconSandbox },
      { title: 'ButtonMini', SandBox: ButtonMiniSandbox },
      { title: 'ButtonDock', SandBox: ButtonDockSandbox },
    ],
  },
  {
    title: 'Cards',
    items: [
      { title: 'Card', SandBox: CardSandbox },
      { title: 'CardCallout', SandBox: CardCalloutSandbox },
      { title: 'CardSummary', SandBox: CardSummarySandbox },
      { title: 'CardTip', SandBox: CardTipSandbox },
    ],
  },
  {
    title: 'Inputs',
    items: [
      { title: 'InputText', SandBox: InputTextSandbox },
      { title: 'InputTextTypes', SandBox: InputTextTypesSandbox },
      { title: 'InputTextArea', SandBox: InputTextAreaSandbox },
      { title: 'InputDatePicker', SandBox: InputDatePickerSandbox },
      { title: 'InputPhone', SandBox: InputPhoneSandbox },
    ],
  },
  {
    title: 'List Items',
    items: [
      { title: 'ListItem', SandBox: ListItemSandbox },
      { title: 'ListItemArticle', SandBox: ListItemArticleSandbox },
      { title: 'ListItemOption', SandBox: ListItemOptionSandbox },
      { title: 'ListItemValue', SandBox: ListItemValueSandbox },
      { title: 'ListItemGroup', SandBox: ListItemGroupSandbox },
    ],
  },
  {
    title: 'Tags',
    items: [{ title: 'Tag', SandBox: TagSandbox }],
  },
  {
    title: 'Boolean Buttons',
    items: [
      { title: 'Radio', SandBox: RadioSandbox },
      { title: 'Checkbox', SandBox: CheckboxSandbox },
    ],
  },
  {
    title: 'ProgressBar',
    items: [{ title: 'ProgressBar', SandBox: ProgressBarSandbox }],
  },
  {
    title: 'Navigation',
    items: [
      {
        title: 'NavigationBarProgress',
        SandBox: NavigationBarProgressSandbox,
      },
      { title: 'NavigationTitle', SandBox: NavigationTitleSandbox },
    ],
  },
  {
    title: 'Dialogs',
    items: [
      {
        title: 'Dialog',
        SandBox: DialogSandbox,
      },
    ],
  },
];
