import React, {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from "react";
import {classNames} from "../../../utils/classNames";

interface CheckboxPropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: React.ReactNode;
    errors?: string | string[];
    invalid?: boolean;
}

const Checkbox = forwardRef(({label, errors, invalid, id, ...rest}: CheckboxPropsType, ref: any): any => {
    const input = (
        <input
            ref={ref}
            type="checkbox"
            className="appearance-none w-[1.125rem] h-[1.125rem] border-2 border-slate-500 rounded-sm bg-white mr-2 hover:border-slate-600 checked:bg-sky-600 checked:border-0 focus:checked:bg-sky-600 hover:checked:bg-sky-700 focus:!outline-0 focus:[box-shadow:none]"
            id={id}
            {...rest}
        />
    );

    if (label)
        return (
            <div className={classNames(invalid && "outline-red-600 outline outline-offset-2 rounded-sm")}>
                <label htmlFor={id} className={"flex items-center"}>
                    {input}
                    <span className={"text-slate-600"}>
                      {label}
                    </span>
                </label>
                {errors && <span>
                    {(Array.isArray(errors) ? errors : [errors])
                        .map((error, i) => (
                            <span key={i} className={"mt-1 inline-block text-xs text-[#da3c3c]"}>{error}</span>
                        ))}
                </span>}
            </div>
        )

    return input;
});
Checkbox.displayName = "Checkbox";

export default Checkbox;