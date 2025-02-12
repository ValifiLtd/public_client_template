import {classNames} from "../../../utils/classNames";

export default function Spinner(
    {
        inline,
        className,
        small,
        hideBackdrop,
        coverScreen,
        classes,
        backdropClasses,
        label
    }: {
        inline?: boolean;
        className?: string;
        small?: boolean;
        hideBackdrop?: boolean;
        coverScreen?: boolean;
        classes?: string;
        backdropClasses?: string;
        label?: string;
    }) {
    if (inline) {
        return (
            <div className={
                classNames(
                    "relative w-[1em] h-[1em] inline-block",
                    classes
                )
            }>
                <div
                    className="w-[1.5em] h-[1.5em] rounded-full absolute
        border-2 border-solid border-gray-200"
                ></div>

                <div
                    className="w-[1.5em] h-[1.5em] rounded-full animate-spin absolute border-2 border-solid border-sky-500 border-t-transparent"
                ></div>
            </div>
        );
    }

    return (
        <div
            className={classNames(
                "absolute h-full w-full flex flex-col items-center justify-center z-[10000]",
                coverScreen && "left-0 top-0 !fixed h-[100vh] supports-[height:100dvh]:h-[100dvh]"
            )}>
            {!hideBackdrop &&
                <div className={classNames(
                    "backdrop:bg-slate-300 bg-white/30 backdrop-blur w-[calc(100%-1px)] h-full absolute z-0",
                    backdropClasses
                )}>
                </div>
            }
            <div className={classNames("relative", small ? "w-12 h-12" : "w-20 h-20")}>
                <div
                    className={classNames("rounded-full absolute border-2 border-solid border-gray-200", small ? "w-12 h-12" : "w-20 h-20")}></div>
                <div
                    className={classNames(
                        "rounded-full animate-spin absolute border-2 border-solid border-sky-500 border-t-transparent",
                        className ? className : "",
                        small ? "w-12 h-12" : "w-20 h-20",
                    )}
                ></div>
            </div>
            <p className={"pt-3 text-slate-500 text-sm"}>{label}</p>
        </div>
    );
}
