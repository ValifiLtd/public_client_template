import React, {createRef, forwardRef} from "react";
import {IMaskInput, ReactElementProps, ReactMaskProps} from "react-imask";
import {MaskElement} from "imask";
import {classNames} from "../../../utils/classNames";
import Spinner from "./Spinner";

type MaskedTextBoxProps = Omit<ReactElementProps<HTMLInputElement>, "label"> & ReactMaskProps<HTMLInputElement> & {
    onChange: (event: { target: { name: string; value: string } }) => void;
    mask: string | RegExp;
    label?: React.ReactNode | string;
    errors?: string | string[];
    invalid?: boolean;
    definitions?: any;
    blocks?: any;
    loading?: boolean;
    classes?: string;
    className?: string;
    hidden?: boolean;
    optional?: boolean;
    boldAndCentered?: boolean;
}


const MaskedTextBox = forwardRef<MaskElement, MaskedTextBoxProps>(
    (props, inputRef) => {
        const {
            onChange,
            mask,
            invalid,
            label,
            errors,
            loading,
            id,
            definitions,
            classes,
            optional,
            boldAndCentered,
            ...other
        } = props;
        const ref = createRef();

        if (props.hidden) return;

        const input = (
            <IMaskInput
                id={id}
                {...other}
                className={classNames(
                    "text-base block w-full py-3 px-3 border rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 placeholder:text-slate-400",
                    "invalid:focus:border-red-300 invalid:focus:ring-red-200  invalid:border-red-500 invalid:text-red-700 invalid:placeholder-[#d2aeae]",
                    "disabled:text-slate-400 disabled:border-slate-300/70",
                    boldAndCentered && "text-center font-semibold text-lg placeholder:font-medium",
                    (invalid || errors?.length) && "!ring-red-200 !border-red-500 !text-red-700 placeholder-[#d2aeae]",
                    classes
                )}
                inputRef={inputRef as any}
                ref={ref}
                definitions={definitions}
                blocks={props.blocks}
                mask={mask as any}
                onAccept={(value: any) => {
                    onChange({target: {name: "MaskedTextBox", value}});
                }}
            />
        );

        if (label)
            return (
                <label htmlFor={id} className={props.className}>
                    <span className={classNames(
                        "text-gray-600 text-sm font-medium mb-1 inline-block",
                        boldAndCentered && "font-medium !text-base inline-flex w-full justify-center",
                    )}>{label}
                        {optional && <span className={"text-[#3c97b6] font-normal"}> (optional)</span>}
                    </span>
                    <span className={"flex relative"}>
                        {input}
                        {loading &&
                            <Spinner
                                small
                                hideBackdrop
                                inline
                                classes={"!absolute right-5 top-1/2 -translate-y-1/2 -mt-0.5"}
                            />}
                    </span>
                    {errors && <span>
                    {(Array.isArray(errors) ? errors : [errors])
                        .map((error, i) => (
                            <span key={i} className={classNames(
                                "mt-1 inline-block text-xs text-[#da3c3c]",
                                boldAndCentered && "text-center w-full"
                            )}>{error}</span>
                        ))}
                </span>}
                </label>
            )

        return input as any;
    }
);
MaskedTextBox.displayName = "MaskedTextBox";

export default MaskedTextBox;