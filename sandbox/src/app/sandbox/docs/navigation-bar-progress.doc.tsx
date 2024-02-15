import { NavigationBarProgress } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <NavigationBarProgress
    totalNumberOfSteps={1}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    totalNumberOfSteps={2}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    totalNumberOfSteps={3}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    totalNumberOfSteps={4}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    totalNumberOfSteps={5}
    currentStep={4}
    currentStepProgress={50}
  />,

  <NavigationBarProgress
    appareance="dark"
    totalNumberOfSteps={1}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="dark"
    totalNumberOfSteps={2}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="dark"
    totalNumberOfSteps={3}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="dark"
    totalNumberOfSteps={4}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="dark"
    totalNumberOfSteps={5}
    currentStep={4}
    currentStepProgress={50}
  />,

  <NavigationBarProgress
    appareance="light"
    totalNumberOfSteps={1}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="light"
    totalNumberOfSteps={2}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="light"
    totalNumberOfSteps={3}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="light"
    totalNumberOfSteps={4}
    currentStep={1}
    currentStepProgress={10}
  />,
  <NavigationBarProgress
    appareance="light"
    totalNumberOfSteps={5}
    currentStep={4}
    currentStepProgress={50}
  />,
];

export const NavigationBarProgressSandbox = () => <DocList docs={docs} />;
