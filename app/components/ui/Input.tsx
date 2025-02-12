import React, {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from "react";
import {classNames} from "../../../utils/classNames";
import Spinner from "./Spinner";

export interface TextBoxPropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: React.ReactNode | string;
    errors?: string | string[];
    invalid?: boolean;
    inputClassName?: string;
    className?: string;
    loading?: boolean;
    labelRef?: React.Ref<HTMLLabelElement>;
    icon?: React.ReactNode;
    optional?: boolean;
    boldAndCentered?: boolean;
}

const Input = forwardRef((
    {
        label,
        errors,
        invalid,
        inputClassName,
        className,
        loading,
        id,
        labelRef,
        icon,
        optional,
        boldAndCentered,
        ...rest
    }: TextBoxPropsType, ref: any) => {
    const input = (
        <input
            ref={ref}
            className={classNames(
                "text-base block w-full px-3 py-3 rounded-md border border-slate-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 placeholder:text-gray-400",
                "invalid:focus:border-red-300 invalid:focus:ring-red-200 invalid:border-red-500 invalid:text-red-700 invalid:placeholder-[#d2aeae]",
                "disabled:text-slate-400 disabled:border-slate-300/70",
                boldAndCentered && "text-center font-semibold text-lg placeholder:font-medium",
                icon && "ps-9",
                inputClassName,
            )}
            id={id}
            {...rest}
        />
    );


    return (
        <label className={className}>
            {label &&
                <span ref={labelRef} className={classNames(
                    "text-sm font-medium inline-block mb-1",
                    boldAndCentered && "font-medium !text-base inline-flex w-full justify-center",
                )}>
                    {label}
                    {optional && <span className={"text-[#3c97b6] font-normal"}> (optional)</span>}
                </span>}
            <span className={"flex relative"}>
                {icon ?
                    <span className={"inline-flex w-full"}>
                        <span className={"absolute left-2 top-1/2 -translate-y-1/2"}>{icon}</span>
                        {input}
                    </span>
                    : input
                }
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
});

Input.displayName = "TextBox";

export default Input;