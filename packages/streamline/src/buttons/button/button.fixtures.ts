import { ButtonProps } from './button.types';

export const fixtures: [string, [string, ButtonProps[]][]][] = [
  [
    'Full Width',
    [
      [
        'FULL - DEFAULT',
        [
          { type: 'full', variant: 'primary' },
          { type: 'full', variant: 'secondary' },
          { type: 'full', variant: 'danger' },
          { type: 'full', variant: 'placeholder' },
        ],
      ],
      [
        'FULL - TOUCH',
        [
          { type: 'full', variant: 'primary', isTouched: true },
          { type: 'full', variant: 'secondary', isTouched: true },
          { type: 'full', variant: 'danger', isTouched: true },
        ],
      ],
      [
        'FULL - DISABLED',
        [
          { type: 'full', variant: 'primary', isDisabled: true },
          { type: 'full', variant: 'secondary', isDisabled: true },
          { type: 'full', variant: 'danger', isDisabled: true },
        ],
      ],
      [
        'FULL - LOADING',
        [
          { type: 'full', variant: 'primary', isLoading: true },
          { type: 'full', variant: 'secondary', isLoading: true },
          { type: 'full', variant: 'danger', isLoading: true },
        ],
      ],
    ],
  ],
  [
    'Mini',
    [
      [
        'MINI - DEFAULT',
        [
          { type: 'mini', iconName: 'Assistant', variant: 'primary' },
          { type: 'mini', iconName: 'Assistant', variant: 'secondary' },
          { type: 'mini', iconName: 'Assistant', variant: 'danger' },
          { type: 'mini', iconName: 'Assistant', variant: 'placeholder' },
        ],
      ],
      [
        'MINI - TOUCH',
        [
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'primary',
            isTouched: true,
          },
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'secondary',
            isTouched: true,
          },
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'danger',
            isTouched: true,
          },
        ],
      ],
      [
        'MINI - DISABLED',
        [
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'primary',
            isDisabled: true,
          },
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'secondary',
            isDisabled: true,
          },
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'danger',
            isDisabled: true,
          },
        ],
      ],
      [
        'MINI - LOADING',
        [
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'primary',
            isLoading: true,
          },
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'secondary',
            isLoading: true,
          },
          {
            type: 'mini',
            iconName: 'Assistant',
            variant: 'danger',
            isLoading: true,
          },
        ],
      ],
    ],
  ],
];

export const buttonStates = fixtures.flatMap((fixtureSet) =>
  fixtureSet[1].map((name) => name[0])
);
