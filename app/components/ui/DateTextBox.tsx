import {classNames} from "../../../utils/classNames";
import React, {useEffect, useRef, useState} from "react";
import useNoInitialEffect from "../../../hooks/useNoInitialEffect";


export function verifyDate(value: any, format = "YYYY-MM-DD") {
    let regex = /^\d{4}-\d{1,2}-\d{1,2}$/,
        monthIndex = 2,
        dayIndex = 1,
        yearIndex = 0;
    /**
     * In these if else we are updating
     * regex and indexes for month, day and year.
     */
    if (format == "YYYY-MM-DD") {
        monthIndex = 1;
        dayIndex = 2;
    } else if (format == "YYYY/DD/MM") {
        regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
    } else if (format == "MM/DD/YYYY" || format == "DD/MM/YYYY") {
        regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        let bool = format == "DD/MM/YYYY";
        /**
         * If format === "DD/MM/YYYY" means
         * here day in at 0 index and month is at index 1.
         * The other possible format inside this else if condition
         * can be "MM/DD/YYYY" where month is
         * at 0 index and date at 1 index.
         * In both conditions year index is at 2.
         */
        monthIndex = bool ? 1 : 0;
        dayIndex = bool ? 0 : 1;
        yearIndex = 2;
    }
    // First check for the pattern
    if (!regex.test(value))
        return false;
    /**
     * Check that is date is like this
     * YYYY-DD-MM or YYYY/DD/MM
     * splited with dashes "-" or slashes "/".
     */
    let splitChar = value.includes("-") ? "-" : "/",
        /**
         * Split the date string into an array and convert
         * every string into number
         */
        date = value.split(splitChar).map(Number),
        /**
         * Now use our day, month and year
         * indexes to get the day, month and year respectively 😁.
         */
        day = date[dayIndex],
        month = date[monthIndex],
        year = date[yearIndex];

    // Check the ranges for possible dates
    if (year < 1000 || year > 3000 || month < 1 || month > 12 || day < 1)
        return false;

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap years.
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
        months[1] = 29;

    // Check that day should not be more than the month length
    return day <= months[month - 1];
}

type DateTextBoxPropsType = {
    name: string;
    value: string;
    onChange: (value: string) => void;
    label?: React.ReactNode | string;
    errors?: string | string[];
    invalid?: boolean;
    className?: string;
    optional?: boolean;
    boldAndCentered?: boolean;
    onSubmit?: () => void;
}

export default function DateTextBox(
    {
        value,
        onChange,
        invalid,
        label,
        className,
        errors,
        onSubmit,
        boldAndCentered
    }: DateTextBoxPropsType) {
    let initYear = "", initMonth: string = "", initDate: string = "";

    if (value) {
        [initYear, initMonth, initDate] = value.split("-");
    }

    const [year, setYear] = useState<number | "">(initYear !== "" ? +initYear : "");
    const [month, setMonth] = useState<number | "">(initMonth !== "" ? +initMonth : "");
    const [date, setDate] = useState<number | "">(initDate !== "" ? +initDate : "");
    const [isFocused, setIsFocused] = useState(false);

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useNoInitialEffect(() => {
        onChange(`${year}-${month}-${date}`);
    }, [date, month, year]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handleInputKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === "Enter" && index < 2 && e.currentTarget.value) {
            inputRefs.current[index + 1]?.focus();
        }
        if (e.key === "Enter" && index === 2 && e.currentTarget.value) {
            inputRefs.current[index]?.blur();
            onSubmit && onSubmit();
        }
    };

    return (
        <label>
            {label && <span className={classNames(
                "text-gray-600 text-sm font-medium inline-block mb-1",
                boldAndCentered && "font-medium !text-base inline-flex w-full justify-center",
            )}>
                {label}
            </span>}
            <div className={classNames(
                "flex items-center",
                "text-base text-gray-700 px-2 w-full rounded-md border bg-white border-slate-300 shadow-sm",
                "invalid:focus:border-red-300 invalid:focus:ring-red-200 invalid:border-red-500 invalid:text-red-700 invalid:placeholder-[#d2aeae]",
                "disabled:text-slate-400 disabled:border-slate-300/70",
                className,
                invalid && "!ring-red-200 !border-red-500 !text-red-700 placeholder-[#d2aeae]",
                isFocused && "border !border-purple-500 ring ring-purple-200 ring-opacity-50",
                boldAndCentered && "inline-flex justify-center",
            )}>
                <input
                    className={classNames(
                        "number-txt text-base text-center text-gray-700 border-0 bg-white px-1.5 py-3 rounded-md focus:ring-0 w-full max-w-[40px] placeholder:text-slate-400",
                        boldAndCentered && "text-center font-semibold text-lg max-w-[50px] placeholder:font-medium",
                    )}
                    enterKeyHint={"next"}
                    min={1}
                    max={31}
                    type={"number"}
                    maxLength={2}
                    placeholder={"DD"}
                    value={date}
                    onChange={({target: {value}}) => {
                        if (value.length === 2) {
                            inputRefs.current[1]?.focus();
                        }
                        setDate(value === "" ? "" : +value);
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={(el) => (inputRefs.current[0] = el) as any}
                    onKeyDown={(e) => handleInputKeyDown(0, e)}
                />
                <span className={"text-slate-400"}>/</span>
                <input
                    className={classNames(
                        "number-txt text-base text-center text-gray-700 border-0 bg-white px-1.5 py-3 rounded-md focus:ring-0 w-full max-w-[40px] placeholder:text-slate-400",
                        boldAndCentered && "text-center font-semibold text-lg max-w-[50px] placeholder:font-medium",
                    )}
                    enterKeyHint={"next"}
                    min={1}
                    max={12}
                    type={"number"}
                    maxLength={2}
                    placeholder={"MM"}
                    value={month}
                    onChange={({target: {value}}) => {
                        if (value.length === 2) {
                            inputRefs.current[2]?.focus();
                        }
                        setMonth(value === "" ? "" : +value);
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={(el) => (inputRefs.current[1] = el)as any}
                    onKeyDown={(e) => handleInputKeyDown(1, e)}
                />
                <span className={"text-slate-400"}>/</span>
                <input
                    className={classNames(
                        "number-txt text-base text-gray-700 border-0 bg-white px-1.5 py-3 rounded-md focus:ring-0 w-full max-w-[150px] placeholder:text-slate-400",
                        boldAndCentered && "font-semibold text-lg -mr-[70px] pl-2 placeholder:font-medium",
                    )}
                    enterKeyHint={"done"}
                    maxLength={4}
                    type={"number"}
                    placeholder={"YYYY"}
                    value={year}
                    onChange={({target: {value}}) => {
                        setYear(value === "" ? "" : +value);
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={(el) => (inputRefs.current[2] = el)as any}
                    onKeyDown={(e) => {
                        if (e.key === "Backspace" || e.key === "Delete" || e.key === "Enter") {
                            handleInputKeyDown(2, e);
                            return;
                        }
                        if (!/\d/.test(e.key) || e.currentTarget.value.length >= 4) {
                            e.preventDefault();
                        }
                    }}
                />
            </div>
            {errors && <span>
                    {(Array.isArray(errors) ? errors : [errors])
                        .map((error, i) => (
                            <span key={i}
                                  className={classNames("mt-1 inline-block text-xs text-[#da3c3c]", boldAndCentered && "text-center w-full")}>{error}</span>
                        ))}
                </span>}
        </label>
    );
}