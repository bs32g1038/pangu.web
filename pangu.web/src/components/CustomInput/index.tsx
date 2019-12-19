import React from 'react';
import classNames from 'classnames';
import { FormControl, InputLabel, Input } from './style';

export default function CustomInput(props) {
    const {
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
    } = props;

    const labelClasses = classNames({
        labelRoot: true,
        labelRootError: error,
        labelRootSuccess: success && !error,
    });

    const underlineClasses = classNames({
        underlineError: error,
        underlineSuccess: success && !error,
        underline: true,
        whiteUnderline: white,
    });

    const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
    });

    const inputClasses = classNames({
        whiteInput: white,
    });

    let formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = classNames(formControlProps.className);
    }

    return (
        <FormControl {...formControlProps} className={formControlClasses}>
            {labelText !== undefined ? (
                <InputLabel className={labelClasses} htmlFor={id} {...labelProps}>
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                classes={{
                    input: inputClasses,
                    root: marginTop,
                    disabled: classNames({ disable: true }),
                    underline: underlineClasses,
                }}
                id={id}
                {...inputProps}
            />
        </FormControl>
    );
}
