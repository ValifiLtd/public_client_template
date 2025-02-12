"use client";
import React, {createContext, useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {useHash, useMount} from "react-use";
import {FormDataStorageType} from "./AppFormInitializer";
import {FormStep, FormStepData, FormStepsData} from "./appFormData";
import {useToastMessage} from "../../hooks/useToastMessage";
import FromProgress from "./FromProgress";
import FormStepLoader from "./FormStepLoader";

export const FORM_VERSION = 1.0;

export const ApplicationFormContext = createContext<{
    currentStep: FormStep,
    formData: FormStepsData | undefined,
    submittingApp: boolean,
    onComplete: (data: FormStepsData) => void,
    onNext: (data: FormStepData<FormStep>, nextStep: FormStep) => void,
    onPrev: (currentStepData: FormStepData<FormStep>) => void,
    onSaveStepData: (data: FormStepData<FormStep>) => void,
}>(
    {} as any
);

export default function ApplicationForm({initFormData}: {
    initFormData: FormDataStorageType,
}) {
    const router = useRouter();
    const [hash, setHash] = useHash();
    const {toast} = useToastMessage();
    const currentStep = hash.substring(1, hash.length) as FormStep;

    const [formData, setFormData] = useState<FormStepsData>(initFormData?.data || {});
    const [submitting, setSubmitting] = useState(false);
    const submitted = useRef(false);

    useEffect(() => {
        if (localStorage.getItem("form_demo") !== null)
            localStorage.setItem("form_demo",
                JSON.stringify({
                    data: formData,
                    currentStep,
                    createdTimestamp: Object.keys(formData).length !== 0 ? initFormData.createdTimestamp : null,
                    modifiedTimestamp: new Date().getTime(),
                    version: FORM_VERSION
                })
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, currentStep]);


    async function onCompleteHandler(formData: FormStepsData) {
    }

    async function onNextHandler(formData: FormStepData<FormStep>, nextStep: FormStep) {
        let data;
        const {skipped, ...rest} = formData as any;

        setFormData((prev) => {
            data = {...prev, [currentStep]: rest};
            return data
        });

        setHash(`#${nextStep}`);
    }

    async function onSaveStepDataHandler(formData: FormStepData<FormStep>) {
        let data;
        const {skipped, ...rest} = formData as any;

        setFormData((prev) => {
            data = {...prev, [currentStep]: rest};
            return data
        });
    }

    function onPrevHandler(currentStepData: FormStepData<FormStep>) {
        let prevStep: string;

        const activeSteps = Object.keys(formData).filter((i) => (formData as any)[i].skipped === undefined);

        if (activeSteps.includes(currentStep)) {
            prevStep = activeSteps[activeSteps.findIndex(i => i === currentStep) - 1];
        } else {
            prevStep = activeSteps[activeSteps.length - 1];
        }

        setFormData(prevData => ({
            ...prevData,
            [currentStep]: {...currentStepData, skipped: true},
        }))

        setHash(`#${prevStep}`);
    }

    return (
        <ApplicationFormContext.Provider
            value={{
                currentStep,
                formData,
                onComplete: onCompleteHandler,
                onNext: onNextHandler,
                onPrev: onPrevHandler,
                onSaveStepData: onSaveStepDataHandler,
                submittingApp: submitting
            }}
        >
            <div className={"flex flex-col w-full h-full md:h-auto"}>
                <FromProgress/>
                <FormStepLoader/>
            </div>
        </ApplicationFormContext.Provider>
    )
}
