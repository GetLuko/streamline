import { ButtonBarSandbox } from './docs/button-bar.doc';
import { ButtonDockSandbox } from './docs/button-dock.doc';
import { ButtonIconSandbox } from './docs/button-icon.doc';
import { ButtonMiniSandbox } from './docs/button-mini.doc';
import { ButtonSandbox } from './docs/button.doc';
import { CardCalloutSandbox } from './docs/card-callout.doc';
import { CardCarouselSandbox } from './docs/card-carousel.doc';
import { CardFeedbackSandbox } from './docs/card-feedback.doc';
import { CardHighlightSandbox } from './docs/card-highlight.doc';
import { CardMediaSandbox } from './docs/card-media.doc';
import { CardOptionSandbox } from './docs/card-option.doc';
import { CardSummarySandbox } from './docs/card-summary.doc';
import { CardTipSandbox } from './docs/card-tip.doc';
import { CardSandbox } from './docs/card.doc';
import { CheckboxSandbox } from './docs/checkbox.doc';
import { ConsentBoxSandbox } from './docs/consent-box.doc';
import { DialogSandbox } from './docs/dialog.doc';
import { IconsSandbox } from './docs/icon.doc';
import { InputCodeSandbox } from './docs/input-code.doc';
import { InputDatePickerSandbox } from './docs/input-date-picker.doc';
import { InputPhoneSandbox } from './docs/input-phone.doc';
import { InputSearchSandbox } from './docs/input-search.doc';
import { InputSelectSandbox } from './docs/input-select.doc';
import { InputSliderRangeSandbox } from './docs/input-slider-range.doc';
import { InputSliderSandbox } from './docs/input-slider.doc';
import { InputTextAreaSandbox } from './docs/input-text-area.doc';
import { InputTextSandbox } from './docs/input-text.doc';
import { ListItemArticleSandbox } from './docs/list-item-article.doc';
import { ListItemCountrySandbox } from './docs/list-item-country.doc';
import { ListItemGroupSandbox } from './docs/list-item-group.doc';
import { ListItemOptionSandbox } from './docs/list-item-option.doc';
import { ListItemSelectableSandbox } from './docs/list-item-selectable.doc';
import { ListItemSwitchSandbox } from './docs/list-item-switch.doc';
import { ListItemValueSandbox } from './docs/list-item-value.doc';
import { ListItemSandbox } from './docs/list-item.doc';
import { MarkdownSandbox } from './docs/markdown.doc';
import { NavigationBarProgressSandbox } from './docs/navigation-bar-progress.doc';
import { NavigationBarSearchSandbox } from './docs/navigation-bar-search.doc';
import { NavigationBarTrailSandbox } from './docs/navigation-bar-trail.doc';
import { NavigationSectionTitleSandbox } from './docs/navigation-section-title.doc';
import { NavigationTitleSandbox } from './docs/navigation-title.doc';
import { ProgressBarSandbox } from './docs/progress-bar.doc';
import { RadioSandbox } from './docs/radio.doc';
import { ShadowSandbox } from './docs/shadows.doc';
import { SkeletonSandbox } from './docs/skeleton.doc';
import { SpinnerSandbox } from './docs/spinner.doc';
import { SwitchSandbox } from './docs/switch.doc';
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
      { title: 'ButtonBar', SandBox: ButtonBarSandbox },
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
      { title: 'CardHighlight', SandBox: CardHighlightSandbox },
      { title: 'CardTip', SandBox: CardTipSandbox },
      { title: 'CardCarousel', SandBox: CardCarouselSandbox },
      { title: 'CardFeedback', SandBox: CardFeedbackSandbox },
      { title: 'CardMedia', SandBox: CardMediaSandbox },
      { title: 'CardOption', SandBox: CardOptionSandbox },
    ],
  },
  {
    title: 'Inputs',
    items: [
      { title: 'InputText', SandBox: InputTextSandbox },
      { title: 'InputTextArea', SandBox: InputTextAreaSandbox },
      { title: 'InputDatePicker', SandBox: InputDatePickerSandbox },
      { title: 'InputSelect', SandBox: InputSelectSandbox },
      { title: 'InputSearch', SandBox: InputSearchSandbox },
      { title: 'InputCode', SandBox: InputCodeSandbox },
      { title: 'InputPhone', SandBox: InputPhoneSandbox },
      { title: 'InputSlider', SandBox: InputSliderSandbox },
      { title: 'InputSliderRange', SandBox: InputSliderRangeSandbox },
    ],
  },
  {
    title: 'List Items',
    items: [
      { title: 'ListItem', SandBox: ListItemSandbox },
      { title: 'ListItemArticle', SandBox: ListItemArticleSandbox },
      { title: 'ListItemCountry', SandBox: ListItemCountrySandbox },
      { title: 'ListItemOption', SandBox: ListItemOptionSandbox },
      { title: 'ListItemValue', SandBox: ListItemValueSandbox },
      { title: 'ListItemGroup', SandBox: ListItemGroupSandbox },
      { title: 'ListItemSelectable', SandBox: ListItemSelectableSandbox },
      { title: 'ListItemSwitch', SandBox: ListItemSwitchSandbox },
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
      { title: 'Switch', SandBox: SwitchSandbox },
      { title: 'ConsentBox', SandBox: ConsentBoxSandbox },
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
      {
        title: 'NavigationBarSearch',
        SandBox: NavigationBarSearchSandbox,
      },
      { title: 'NavigationTitle', SandBox: NavigationTitleSandbox },
      { title: 'NavigationBarTrail', SandBox: NavigationBarTrailSandbox },
      {
        title: 'NavigationSectionTitle',
        SandBox: NavigationSectionTitleSandbox,
      },
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
