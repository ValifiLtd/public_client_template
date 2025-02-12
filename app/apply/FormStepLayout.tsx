import React, {useEffect} from "react";
import {classNames} from "../../utils/classNames";

type FormStepLayoutProps = {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    actionButtons?: React.ReactNode;
    hideBackButton?: boolean;
    backButtonOnClick?: () => void;
};

function addNonBreakingSpace(sentence: any): string {
    if (typeof sentence !== "string") return sentence;

    const words: string[] = sentence.trim().split(/\s+/);
    if (words.length > 3) {
        words[words.length - 2] += "\u00A0" + words.pop();
    }
    return words.join(" ");
}

export default function FormStepLayout(props: FormStepLayoutProps) {
    useEffect(() => {
        const actionBar = document.querySelector(".action-bar");
        const main = document.querySelector("main")!;

        function handleResize() {
            if (!matchMedia("(max-width: 768px)").matches) return;
            if (actionBar && main)
                main.style.paddingBottom = `calc(${actionBar.scrollHeight}px + 2rem)`;
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            if (actionBar && main) main.style.paddingBottom = "";
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    return (
        <section
            className="flex flex-col w-full h-full md:h-auto -mb-4">
            <div className="flex flex-col mt-3 h-fit md:h-auto md:bg-white md:shadow-lg md:shadow-gray-200/40 mb-3 rounded-lg md:p-12 md:pt-2">
                <div className="mb-3">
                    {(props.title || props.subtitle) && <div className="text-center sm:col-span-6 mb-3 md:mb-4">
                        {props.title &&
                            <h1 className="mt-4 md:mt-8 font-semibold text-2xl md:text-3xl md:mb-4">
                                {addNonBreakingSpace(props.title)}
                            </h1>}
                        {props.subtitle && <p className="mt-2.5 text-slate-600">{props.subtitle}</p>}
                    </div>}
                </div>
                <div className="grid gap-x-5 gap-y-4 md:grid-cols-6">
                    {props.children}
                </div>
                {props.footer && <div>
                    {props.footer}
                </div>}
                {(props.actionButtons || !props.hideBackButton) && <div
                    className={classNames(
                        "action-bar bg-[#f7f5fc]",
                        "md:col-span-6 text-center mt-8 flex gap-2 justify-between",
                        "fixed right-0 left-0 md:static w-full bottom-0 p-4 pb-3 pt-2.5 md:m-0 md:!mt-8 md:!p-0 border-t border-t-[#e8e8e8] md:border-0 md:bg-transparent",
                        props.actionButtons && "flex-row-reverse md:flex-row"
                    )}>
                    {props.actionButtons}
                    {!props.hideBackButton && (
                        <button
                            onClick={props.backButtonOnClick}
                            aria-label={"Back"}
                            className="text-gray-400/60 px-3 py-3 text-lg rounded-lg flex justify-center items-center hover:bg-gray-200 hover:text-gray-400 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                            </svg>
                            Back
                        </button>
                    )}
                </div>}
            </div>
        </section>
    );
}
