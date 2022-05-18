import {FormControl, Input} from 'native-base';
import {Controller} from 'react-hook-form';

interface IInputField {
  control: any;
  errors: any;
  placeholder?: string;
  name: string;
  defaultValue: any;
  label?: string;
}

const InputField = ({control, errors, placeholder, name, defaultValue, label}: IInputField) => {
  return (
    <FormControl isRequired isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            bg="white"
            borderRadius={'10px'}
            borderWidth="1"
            borderStyle="solid"
            borderColor="warmGray.200"
            _focus={{borderColor: 'warning.600'}}
            _dark={{bg: 'warmGray.400'}}
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />
      <FormControl.ErrorMessage>{errors[name]?.message}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default InputField;
