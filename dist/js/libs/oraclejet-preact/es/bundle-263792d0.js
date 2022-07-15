/* @oracle/oraclejet-preact: 13.0.0 */
const bundle = {
    close: () => 'Close',
    error: () => 'Error',
    warn: () => 'Warning',
    info: () => 'info',
    confirmation: () => 'Confirmation',
    progressIndeterminate: () => 'In Progress',
    inputPassword_show: () => 'Show Password',
    inputPassword_hide: () => 'Hide Password',
    inputPassword_hidden: () => 'Password Hidden',
    formControl_clear: () => 'Clear',
    formControl_maxLengthExceeded: (p) => 'Maximum length ' + p['MAX_LENGTH'] + ' exceeded.',
    formControl_maxLengthRemaining: (p) => p['CHARACTER_COUNT'] + ' characters left.',
    select_noMatchesFound: () => 'No matches found',
    select_oneMatchFound: () => 'One match found',
    select_sizeMatchesFound: (p) => p['TOTAL_SIZE'] + ' matches found',
    select_sizeOrMoreMatchesFound: (p) => p['TOTAL_SIZE'] + ' or more matches found',
    selectMultiple_showSelectedValues: () => 'Show selected values only.',
    selectMultiple_valuesSelected: (p) => p['VALUE_COUNT'] + ' values selected.',
    selectMultiple_countPlus: (p) => p['COUNT'] + '+',
    selector_selected: () => 'Checkbox checked',
    selector_unselected: () => 'Checkbox not checked',
    userAssistance_learnMore: () => 'Learn more',
    userAssistance_required: () => 'Required'
};

export { bundle as default };
/*  */
//# sourceMappingURL=bundle-263792d0.js.map