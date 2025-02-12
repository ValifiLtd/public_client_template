import React, {ReactNode, useState} from "react";
import {classNames} from "../../../utils/classNames";

type OptionType<T> = {
    label: string | ReactNode;
    value: T;
    itemRenderer?: (
        key: any,
        item: { label: string | ReactNode; value: T },
        active: boolean,
        handleSelect: (option: OptionType<T>) => void
    ) => React.ReactNode;
};

type OptionPickerProps<T> = {
    label?: string;
    className?: string;
    containerClassName?: string;
    itemClassName?: string;
    options: OptionType<T>[];
    onSelect: (option: OptionType<T>) => void;
    value?: T;
    errors?: string | string[];
    numberOfItemsToShow?: number;
};

function OptionPicker<T>(
    {
        options,
        onSelect,
        className,
        itemClassName,
        containerClassName,
        label,
        errors,
        numberOfItemsToShow = options.length,
        value
    }: OptionPickerProps<T>) {
    const [expanded, setExpanded] = useState(!numberOfItemsToShow);

    const handleSelect = (option: OptionType<T>) => {
        onSelect(option);
    };

    const renderOptions = options
        .slice(0, expanded ? options.length : numberOfItemsToShow)
        .map((option, index) =>
            option.itemRenderer ? (
                option.itemRenderer(index, option, value === option.value, handleSelect)
            ) : (
                <button
                    type={"button"}
                    key={index}
                    className={classNames(
                        "flex items-center justify-center px-16 py-3 duration-300 rounded-lg text-base font-medium  bg-white border md:hover:text-white",
                        itemClassName,
                        `border-slate-300 md:hover:bg-purple-600`,
                        option.value === value ? `!bg-purple-400 text-white !border-purple-400` : ""
                    )}
                    onClick={() => handleSelect(option)}
                >
                    {option.label}
                </button>
            )
        );

    const expandButton = options.length > numberOfItemsToShow && (
        <button
            onClick={() => setExpanded(!expanded)}
            className={classNames(
                "block mt-3 w-full mx-auto py-2.5 col-span-2 duration-300 rounded-lg text-base text-slate-500 bg-white border hover:text-white",
                `border-slate-200 hover:bg-purple-500`,
            )}
        >
            Show More
        </button>
    );

    return (
        <div className={containerClassName}>
            {label && (
                <div className={"texts text-sm font-medium inline-block mb-1"}>
                    {label}
                </div>
            )}
            <div className={classNames(className)}>
                {renderOptions}
            </div>

            <div className={classNames(className)}>
                {!expanded && expandButton}
            </div>

            {errors && (
                <span>
          {(Array.isArray(errors) ? errors : [errors]).map((error, i) => (
              <span key={i} className={"mt-1 inline-block text-xs text-[#da3c3c]"}>
              {error}
            </span>
          ))}
        </span>
            )}
        </div>
    );
}

export default OptionPicker;
