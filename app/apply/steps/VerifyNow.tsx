import React, {useContext} from "react";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";

export default function VerifyNow() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    return (
        <FormStepLayout
            title={"Almost there!"}
            subtitle={
            <span className={"text-lg font-medium"}>
                Complete 3 simple questions to verify your identity and get your agreements, You could be owed <span className={"font-bold text-emerald-700"}>£6,600 GBP</span>.
            </span>
            }
            backButtonOnClick={() => onPrev({})}
        >
            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <div className={"flex flex-col w-full"}>
                    <Button
                        type="success"
                        onClick={() => {
                            onNext({}, "verify1")
                        }}
                        className="md:w-full text-base font-medium w-full my-1 text-center inline-flex items-center justify-center gap-x-2">
                        Verify Now
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.2941 4.25282C16.1042 4.28414 15.9443 4.38855 15.8144 4.58692L9.53862 14.3175L6.58062 11.2689C6.32579 10.8669 5.83612 10.8356 5.5813 11.1018L4.42208 12.3129C4.16725 12.7149 4.16725 13.2578 4.42208 13.524L8.89905 18.2014C9.15388 18.3371 9.51364 18.619 9.89838 18.619C10.1532 18.619 10.5629 18.478 10.8178 18.0761L18.4926 6.29916C18.7474 5.8972 18.6025 5.52134 18.0928 5.25511L16.8137 4.29458C16.6838 4.22672 16.4839 4.2215 16.2941 4.25282Z"
                                fill="white"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </FormStepLayout>
    );
}
