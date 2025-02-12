import React, {useContext, useEffect} from "react";
import FormStepLayout from "../FormStepLayout";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";

export default function FindingAgreements() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    useEffect(() => {
        const timer = setTimeout(() => {
            onNext({}, "pcpClaims");
        }, 3000);

        return () => clearTimeout(timer)
    }, [])

    return (
        <FormStepLayout
            backButtonOnClick={() => onPrev({})}
        >
            <div className="sm:col-span-6 flex flex-col items-center gap-x-3">
                <h1 className="mt-4 md:mt-8 font-semibold text-2xl md:text-3xl md:mb-4 text-center">
                    <span className={"text-7xl mb-3 inline-block animate-pulse"}>🚗</span> <br/>
                    Checking answers and finding your finance agreements...
                </h1>
            </div>
        </FormStepLayout>
    );
}
