import { IFieldConfig } from '../../types';
import { FieldType } from '../../constants/fields';

export const RadioSettings: IFieldConfig['settings'] = [
  {
    type: FieldType.list,
    name: 'options',
    label: 'Options',
    defaultValue: [],
  },
];

export default RadioSettings;
