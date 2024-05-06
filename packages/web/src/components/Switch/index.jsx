import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
export default function Switch(props) {
  const { control } = useFormContext();
  const inputRef = React.useRef(null);
  const {
    required,
    name,
    defaultChecked = false,
    shouldUnregister = false,
    disabled = false,
    onBlur,
    onChange,
    label,
    FormControlLabelProps,
    className,
    ...switchProps
  } = props;
  return (
    <Controller
      rules={{ required }}
      name={name}
      defaultValue={defaultChecked}
      control={control}
      shouldUnregister={shouldUnregister}
      render={({
        field: {
          ref,
          onChange: controllerOnChange,
          onBlur: controllerOnBlur,
          value,
          ...field
        },
      }) => (
        <FormControlLabel
          className={className}
          {...FormControlLabelProps}
          control={
            <MuiSwitch
              {...switchProps}
              {...field}
              checked={value}
              disabled={disabled}
              onChange={(...args) => {
                controllerOnChange(...args);
                onChange?.(...args);
              }}
              onBlur={(...args) => {
                controllerOnBlur();
                onBlur?.(...args);
              }}
              inputRef={(element) => {
                inputRef.current = element;
                ref(element);
              }}
            />
          }
          label={label}
        />
      )}
    />
  );
}
