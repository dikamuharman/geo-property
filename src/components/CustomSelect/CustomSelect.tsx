import { Icon, Text } from '@chakra-ui/react';
import { Select, chakraComponents } from 'chakra-react-select';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa';

export interface CustomSelectProps {
  options: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  isClearable?: boolean;
  value?: string;
  name?: string;
  optionsIcon?: IconType;
  dropdownIndicator?: IconType;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  onChange,
  placeholder,
  name,
  optionsIcon,
  dropdownIndicator = FaChevronDown,
}) => {
  return (
    <Select
      size="lg"
      placeholder={placeholder}
      onChange={(valueOption) => onChange && onChange(valueOption?.value)}
      options={options}
      name={name}
      isClearable
      chakraStyles={{
        input: (provided) => ({
          ...provided,
          width: '100%',
        }),
        container: (provided) => ({
          ...provided,
          width: '100%',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          bg: 'transparent',
          borderWidth: 0,
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          bg: 'transparent',
          borderWidth: 0,
        }),
        crossIcon: (provided) => ({
          ...provided,
          color: 'blue.500',
        }),
      }}
      components={{
        Option: ({ children, ...props }) => (
          <chakraComponents.Option {...props}>
            {optionsIcon && (
              <Icon as={optionsIcon} boxSize={4} color="gray.500" mr="10px" />
            )}
            <Text>{children}</Text>
          </chakraComponents.Option>
        ),
        DropdownIndicator: ({ children, ...props }) => (
          <chakraComponents.DropdownIndicator {...props}>
            <Icon as={dropdownIndicator} boxSize={4} color="blue.500" />
            {children}
          </chakraComponents.DropdownIndicator>
        ),
      }}
    />
  );
};

export default CustomSelect;
