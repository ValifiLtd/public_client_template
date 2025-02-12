import Toast, {ToastOptions, Toaster} from "react-hot-toast";
import React from "react";

export const useToastMessage = () => {
    const defaultConfigs: ToastOptions = {
        position: "bottom-center",
        className: "!bg-slate-800/90 !text-white rounded-md",
    };

    return {
        toast: {
            success(msg: string, configs?: ToastOptions) {
                Toast.success(msg, {...defaultConfigs, ...configs})
            },
            error(msg: string, configs?: ToastOptions) {
                Toast.error(msg, {...defaultConfigs, ...configs})
            },
            loading(msg: string, configs?: ToastOptions) {
                Toast.loading(msg, {...defaultConfigs, ...configs})
            },
            yesNo: (label: string, cb: any) => {
                return Toast.custom(
                    (t) => (
                        <div
                            className={`${
                                t.visible ? "animate-enter" : "animate-leave"
                            } relative z-[9999999] !bg-slate-800/90 !text-white rounded-md max-w-md w-full bg-white shadow-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
                        >
                            <div className="p-4 flex gap-2 mt-1">
                                <p className="text-sm">
                                    {label}
                                </p>
                            </div>
                            <div className="flex border-t border-gray-600">
                                <button
                                    onClick={() => {
                                        Toast.remove(t.id);
                                        cb(true);
                                    }}
                                    className="w-full border border-transparent border-r border-r-slate-600 rounded-none px-4 py-3 flex items-center justify-center text-sm font-medium hover:text-sky-500"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => {
                                        Toast.remove(t.id);
                                        cb(false);
                                    }}
                                    className="w-full border border-transparent rounded-none rounded-r-lg px-4 py-3 flex items-center justify-center text-sm font-medium hover:text-sky-500"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    ), {position: "bottom-center"},
                )
            },
            dismiss: Toast.dismiss
        },
        Toaster: Toaster
    };
}
