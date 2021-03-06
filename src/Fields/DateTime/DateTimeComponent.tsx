import React from 'react';
import { IFieldComponentProps } from '../../types';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {
  KeyboardDateTimePicker,
  KeyboardDateTimePickerProps,
} from '@material-ui/pickers';
import FieldAssistiveText from '../../FieldAssistiveText';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

export interface IDateTimeComponentProps
  extends IFieldComponentProps,
    Omit<
      KeyboardDateTimePickerProps,
      'label' | 'name' | 'onChange' | 'value' | 'onBlur' | 'ref'
    > {}

export default function DateTimeComponent({
  field: { onChange, onBlur, value, ref },
  fieldState,
  formState,

  name,
  useFormMethods,

  errorMessage,
  assistiveText,
  ...props
}: IDateTimeComponentProps) {
  let transformedValue = null;
  if (value && 'toDate' in value) transformedValue = value.toDate();
  else if (value !== undefined) transformedValue = value;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        variant="inline"
        fullWidth
        format="yyyy/MM/dd hh:mm a"
        placeholder="yyyy/MM/dd h:mm a"
        keyboardIcon={<AccessTimeIcon />}
        InputLabelProps={{ shrink: transformedValue !== null }}
        {...props}
        value={transformedValue}
        onChange={onChange}
        onBlur={onBlur}
        onClose={onBlur}
        error={!!errorMessage}
        FormHelperTextProps={{ component: 'div' } as any}
        helperText={
          (errorMessage || assistiveText) && (
            <>
              {errorMessage}

              <FieldAssistiveText
                style={{ margin: 0 }}
                disabled={!!props.disabled}
              >
                {assistiveText}
              </FieldAssistiveText>
            </>
          )
        }
        data-type="date"
        data-label={props.label ?? ''}
        inputProps={{ required: false }}
        inputRef={ref}
      />
    </MuiPickersUtilsProvider>
  );
}
