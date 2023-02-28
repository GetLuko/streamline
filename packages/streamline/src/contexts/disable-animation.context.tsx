import React, { createContext } from 'react';

export const AnimationContext = createContext({ disableAnimation: false });

interface AnimationContextProviderProps {
  disableAnimation: boolean;
  children: React.ReactNode;
}

const AnimationContextProvider = ({
  disableAnimation,
  children,
}: AnimationContextProviderProps) => {
  const isAnimationDisabled = disableAnimation;

  return (
    <AnimationContext.Provider
      value={{ disableAnimation: isAnimationDisabled }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContextProvider;
