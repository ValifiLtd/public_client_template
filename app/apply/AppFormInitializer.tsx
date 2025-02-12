"use client";
import React, {useRef, useState} from "react";
import {useHash, useMount} from "react-use";
import Spinner from "../components/ui/Spinner";
import ApplicationForm, {FORM_VERSION} from "./ApplicationForm";
import {FormStep} from "./appFormData";

export type FormDataStorageType = {
    data: null | any,
    currentStep: FormStep
    createdTimestamp: number
    modifiedTimestamp: number
}

export default function AppFormInitializer() {
    const [_, setHash] = useHash();
    const [loading, setLoading] = useState(true);
    const persistedFormData = useRef<FormDataStorageType>(null)

    useMount(() => {
        const savedFormDataJson = localStorage.getItem("form_demo");
        const formData = savedFormDataJson ? JSON.parse(savedFormDataJson) : {
            data: null,
            currentStep: "splash",
            version: FORM_VERSION
        };

        localStorage.setItem("form_demo", JSON.stringify(formData));

        persistedFormData.current = formData;

        setHash(savedFormDataJson === null ? "#splash" : `#${formData.currentStep}`);
        setLoading(false);
    });


    if (loading) return <Spinner hideBackdrop coverScreen/>;

    return (
        <>
            <ApplicationForm initFormData={persistedFormData.current!}/>
        </>
    )
}
