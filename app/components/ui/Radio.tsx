import React from "react";
import {classNames} from "../../../utils/classNames";

type RadioOptionProps = {
    id: string;
    label: string;
    checked: boolean;
    name: string;
    onChange: (id: string) => void;
}

export const RadioOption = ({id, name, label, checked, onChange}: RadioOptionProps) => {
    const handleOptionChange = () => {
        onChange(id);
    };

    return (
        <div className="flex items-center">
            <input
                id={id}
                type="radio"
                name={name}
                className="hidden"
                checked={checked}
                onChange={handleOptionChange}
            />
            <label
                htmlFor={id}
                className="flex items-center cursor-pointer "
            >
                <span className="w-5 h-5 inline-block mr-1 rounded-full border border-purple-200 relative">
                   {checked && <span className="w-3.5 h-3.5 inline-block -mt-2 rounded-full bg-[#07b67a] absolute top-2.5 left-0.5"></span>}
                </span>
                <span className={"ml-1.5"}>{label}</span>
            </label>
        </div>
    );
};

type RadioProps = {
    label: string;
    options: { text: string, value: any }[];
    value: any;
    onChange: (value: { text: string, value: any }) => void;
    name: string;
    errors?: string | string[];
    hidden?: boolean;
    className?: string;
    containerClassName?: string;
}

const Radio = ({name, label, options, value, onChange, errors, hidden, className, containerClassName}: RadioProps) => {
    const handleOptionChange = (selectedValue: { text: string, value: any }) => {
        onChange(selectedValue);
    };

    if (hidden) return;

    return (
        <div className={"flex flex-col w-full"}>
            <div className={classNames(
                "flex items-center justify-between",
                className,
                errors?.length && "outline outline-1 outline-red-500 outline-offset-2 rounded-sm"
            )}>
                {label && <p className="text-slate-600">{label}</p>}

                <div className={classNames(
                    "text-center flex flex-wrap gap-x-4 pr-2",
                    containerClassName
                )}>
                    {options.map((option, i) => (
                        <RadioOption
                            name={name}
                            key={`radio-${i}`}
                            id={`radio-${i}`}
                            label={option.text}
                            checked={option.value === value}
                            onChange={() => {
                                handleOptionChange(option)
                            }}
                        />
                    ))}
                </div>
            </div>
            {errors && <span>
                    {(Array.isArray(errors) ? errors : [errors])
                        .map((error, i) => (
                            <span key={i} className={"mt-1 inline-block text-xs text-[#da3c3c]"}>{error}</span>
                        ))}
                </span>}
        </div>
    );
};

export default Radio;
