import { ButtonDock } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <ButtonDock
    primaryButton={{
      text: 'Primary Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'primary',
    }}
  />,
  <ButtonDock
    primaryButton={{
      text: 'Primary Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'primary',
    }}
    secondaryButton={{
      text: 'Secondary Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'secondary',
    }}
  />,
  <ButtonDock
    isFloating
    primaryButton={{
      text: 'Danger Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'danger',
    }}
  />,
  <ButtonDock
    isFloating
    primaryButton={{
      text: 'Danger Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'danger',
    }}
    secondaryButton={{
      text: 'Secondary Default',
      onPress: () => {
        console.log('Primary button pressed');
      },
      appearance: 'neutral',
    }}
  />,
];

export const ButtonDockSandbox = () => <DocList docs={docs} />;
