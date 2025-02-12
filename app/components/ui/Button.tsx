import Link from "next/link";
import React from "react";
import {classNames} from "../../../utils/classNames";

interface PropsType {
    type?: "primary" | "success";
    url?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button(props: PropsType) {
    const url = props.url ? props.url : "/";

    if (props.onClick) {
        return (
            <button
                type="button"
                disabled={props.disabled}
                className={classNames(
                    props.type === "success" ? "bg-[#07b67a] hover:bg-[#0aa36e]" : "bg-[#991FFE] hover:bg-[#851bdc]",
                    "inline-block text-white px-14 py-3 duration-300 rounded-lg text-lg disabled:bg-slate-400 disabled:text-slate-200",
                    props.className,
                    props.disabled ? "pointer-events-none" : "",
                )}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        );
    }

    return (
        <Link
            className={classNames(
                props.type === "success" ? "bg-[#07b67a] hover:bg-[#0aa36e]" : "bg-[#991FFE] hover:bg-[#991FFE]",
                "inline-block text-white px-14 py-3 duration-300 rounded-lg text-lg",
                props.className,
                props.disabled ? "pointer-events-none" : "",
            )}
            href={url}
            scroll={false}
        >
            {props.children}
        </Link>
    );
}
