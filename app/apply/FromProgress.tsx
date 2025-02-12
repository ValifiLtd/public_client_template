import React, {useContext} from "react";
import {ApplicationFormContext} from "./ApplicationForm";
import {appFormData} from "./appFormData";

export const formSteps: (keyof typeof appFormData)[] = [
    "misSoldCarFinanceClaim",
    "dateOfBirth",
    "address",
    "pickAddress",
    "name",
    "contact",
    "verifyNow",
    "verify1",
    "verify2",
    "verify3",
    "findingAgreements",
    "pcpClaims",
    "signature",
]

function calculateFormProgress(currentStep: any) {
    const totalSteps = formSteps.length;
    const currentIndex = formSteps.indexOf(currentStep);

    if (currentIndex === -1) return 0;

    const progressPercentage = ((currentIndex + 1) / totalSteps) * 100;
    return Math.round(progressPercentage);
}

export default function FromProgress() {
    const {currentStep} = useContext(ApplicationFormContext);
    const progress = calculateFormProgress(currentStep);

    if (currentStep === "splash") {
        return null;
    }

    return (
        <div className={"h-[5px] bg-purple-200 w-full rounded-sm mt-4 relative"}>
            <div className={"h-[5px] bg-[#06b67a] rounded"}
                 style={{
                     width: `${progress}%`,
                     transition: "width 0.5s ease-in-out"
                 }}
            >
            </div>
            <img className={"absolute -top-4"} style={{
                opacity: `${progress === 0 ? 0 : 1}`,
                left: `calc(${progress}% - 20px)`,
                transition: "left 0.5s ease-in-out, opacity 0.5s ease-in-out"
            }} src="car-icon.svg" alt=""/>
            <span className={"text-sm font-medium text-gray-500 absolute right-0 -top-14"}>{progress}% completed</span>
        </div>
    )
}
