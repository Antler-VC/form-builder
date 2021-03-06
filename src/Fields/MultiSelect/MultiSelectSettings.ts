import { IFieldConfig } from '../../types';
import { FieldType } from '../../constants/fields';

export const MultiSelectSettings: IFieldConfig['settings'] = [
  {
    type: FieldType.list,
    name: 'options',
    label: 'Options',
    defaultValue: [],
  },
  {
    type: FieldType.checkbox,
    name: 'searchable',
    label: 'User can search options',
    defaultValue: true,
  },
  {
    type: FieldType.shortText,
    name: 'labelPlural',
    label: 'Plural Label (if searchable)',
    defaultValue: undefined,
    displayCondition: 'return values.searchable === true',
  },
  {
    type: FieldType.checkbox,
    name: 'freeText',
    label: 'User can add new options',
    defaultValue: false,
  },
  {
    type: FieldType.checkbox,
    name: 'clearable',
    label: 'User can clear selection',
    defaultValue: true,
  },
  {
    type: FieldType.checkbox,
    name: 'selectAll',
    label: 'User can select all options',
    defaultValue: true,
  },
];

export default MultiSelectSettings;
