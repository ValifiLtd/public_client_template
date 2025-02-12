import React, {useContext} from "react";
import FormStepLayout from "../FormStepLayout";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import Button from "../../components/ui/Button";

export default function PcpClaims() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    return (
        <FormStepLayout
            backButtonOnClick={() => onPrev({})}
        >
            <div className="sm:col-span-6 flex flex-col items-center gap-x-3">
                <h1 className="mt-4 md:mt-8 font-bold text-[1.75rem] md:text-4xl md:mb-4 text-center">
                    Great News...
                </h1>
                <p className={"mt-2 text-gray-600"}>Your account has been validated and we have found the following
                    motor finance agreements that we can work with.</p>
                <ul className={"flex flex-col w-full mt-3 gap-y-3"}>
                    <li className={"w-full"}>
                        <button
                            onClick={() => {
                            onNext({}, "signature");
                        }} className={"flex flex-col bg-white rounded-md p-4 border border-gray-200 hover:bg-purple-50 focus::bg-purple-100 w-full"}
                        >
                            <h3 className={"font-semibold text-lg mb-1"}>Black Horse Finance</h3>
                            <p className={"text-sm text-gray-500"}>March 2021, April 2023</p>
                        </button>
                    </li>
                    <li className={"w-full"}>
                        <button
                            onClick={() => {
                            onNext({}, "signature");
                        }} className={"flex flex-col bg-white rounded-md p-4 border border-gray-200 hover:bg-purple-50 focus::bg-purple-100 w-full"}
                        >
                            <h3 className={"font-semibold text-lg mb-1"}>Motornoava</h3>
                            <p className={"text-sm text-gray-500"}>March 2018, March 2020</p>
                        </button>
                    </li>
                </ul>

                <Button
                    type="success"
                    onClick={() => {
                        onNext({}, "signature")
                    }}
                    className="mt-5 mb-3 py-4 md:w-full text-base font-medium w-full my-1 text-center">
                    Complete Final Step
                </Button>

            </div>
        </FormStepLayout>
    );
}
