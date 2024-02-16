export const isMaestro = () => {
  return process.env.EXPO_PUBLIC_E2E === 'true';
};
