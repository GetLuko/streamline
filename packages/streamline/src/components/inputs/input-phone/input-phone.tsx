import { Box } from '../../../primitives/box/box';
import CountryPicker from './components/country-picker';
import { countries } from './input-phone.constants';

export const InputPhone = () => {
  return (
    <Box>
      {Object.keys(countries).map((country) => (
        <CountryPicker countryCode={country} />
      ))}
    </Box>
  );
};

export default InputPhone;
