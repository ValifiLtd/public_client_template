"use client";
import React, {useContext} from "react";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";
import {ApplicationFormContext} from "../ApplicationForm";

export default function Splash() {
    const {onNext, formData} = useContext(ApplicationFormContext);

    return (
        <div className={"flex flex-col w-full h-full md:h-auto"}>
            <FormStepLayout
                title={"Valifi Journey Demo"}
                hideBackButton
            >
                <div className="sm:col-span-6 flex flex-col items-center gap-2">
                    <div className="mt-4 mb-3 border-2 border-purple-800/10 p-5 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-700 mb-3">Client Managed API and Journey</h2>
                        <p className="text-gray-700 leading-relaxed">
                            In this journey, your website developers integrate directly with our APIs, giving you
                            complete control over how you manage the customer journey.
                        </p>
                        <div className="mt-4">
                            <Button
                                onClick={()=>{
                                    onNext({}, "splash2")
                                }}
                                className="md:w-full font-medium w-full my-1 text-center">
                                Run Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </FormStepLayout>
        </div>
    )
}
