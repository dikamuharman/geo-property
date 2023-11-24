export type TBaseCustomInputType = {
  label: string;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  name?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
};
