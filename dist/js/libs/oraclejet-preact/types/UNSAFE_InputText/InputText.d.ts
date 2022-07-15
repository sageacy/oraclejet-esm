/**
 * @license
 * Copyright (c) %FIRST_YEAR% %CURRENT_YEAR%, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { ComponentProps, Ref } from 'preact';
import { FocusableHandle } from '../hooks/UNSAFE_useFocusableTextField';
import { CountUnit } from '../hooks/UNSAFE_useLengthFilter';
import { TextField, TextFieldInput } from '../UNSAFE_TextField';
import { InlineUserAssistance } from '../UNSAFE_UserAssistance';
import { Size } from '../utils/UNSAFE_size';
declare type PickedPropsFromTextField = Pick<ComponentProps<typeof TextField>, 'id' | 'startContent' | 'endContent'>;
declare type PickedPropsFromTextFieldInput = Pick<ComponentProps<typeof TextFieldInput>, 'autoComplete' | 'autoFocus' | 'placeholder' | 'isRequired' | 'role' | 'textAlign' | 'value' | 'onInput' | 'onCommit'>;
declare type PickedPropsFromInlineUserAssistance = Pick<ComponentProps<typeof InlineUserAssistance>, 'assistiveText' | 'helpSourceLink' | 'helpSourceText' | 'isRequiredShown' | 'messages' | 'userAssistanceDensity'>;
declare type Props = PickedPropsFromTextField & PickedPropsFromTextFieldInput & PickedPropsFromInlineUserAssistance & {
    hasClearIcon?: 'always' | 'conditionally' | 'never';
    isDisabled?: boolean;
    isReadonly?: boolean;
    label?: string;
    labelEdge?: 'inside' | 'start' | 'top' | 'none';
    labelStartWidth?: Size;
    maxLength?: number;
    maxLengthUnit?: CountUnit;
    virtualKeyboard?: 'auto' | 'email' | 'number' | 'search' | 'tel' | 'text' | 'url';
};
export declare const InputText: import("preact").FunctionalComponent<Omit<Props, "ref"> & {
    ref?: Ref<FocusableHandle> | undefined;
}>;
export {};