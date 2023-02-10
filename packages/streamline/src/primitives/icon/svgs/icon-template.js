const eslintRule = '/* eslint-disable @typescript-eslint/no-unused-vars */\n';

const iconTemplate = (variables, { tpl }) => {
  // Remove "Svg" from component name "SvgIcon"
  const componentName = variables.componentName.replace('Svg', '');
  const exportString = `export default ${componentName};`;
  return tpl`
${eslintRule}
${variables.imports};

${variables.interfaces};

const ${componentName} = ({ color = '#2D50E6', ...props}: SvgProps) => (
  ${variables.jsx}
);

${exportString};
`;
};

module.exports = iconTemplate;
