import { ButtonDock } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <ButtonDock
    primary={{
      text: 'Primary Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'primary',
    }}
  />,
  <ButtonDock
    primary={{
      text: 'Primary Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'primary',
    }}
    secondary={{
      text: 'Secondary Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'secondary',
    }}
  />,
  <ButtonDock
    isFloating
    primary={{
      text: 'Danger Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'danger',
    }}
  />,
  <ButtonDock
    isFloating
    primary={{
      text: 'Danger Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'danger',
    }}
    secondary={{
      text: 'Neutral Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'neutral',
    }}
  />,
];

export const ButtonDockSandbox = () => <DocList docs={docs} />;
