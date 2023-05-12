export const isMaestro = () => {
  return process.env.NX_E2E === 'true';
};
