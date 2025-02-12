import React, {useContext} from "react";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";

export default function MisSoldCarFinanceClaim() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    return (
        <FormStepLayout
            title={"Would you like to make a claim for mis-sold car finance?"}
            backButtonOnClick={() => onPrev({})}
        >
            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <div className={"flex flex-col w-full"}>
                    <Button
                        type="success"
                        onClick={()=>{
                            onNext({}, "dateOfBirth")
                        }}
                        className="md:w-full !py-3 text-base font-medium w-full my-1 text-center">
                        Yes
                    </Button>
                    <Button
                        type="success"
                        onClick={()=>{
                        }}
                        className="mt-0.5 md:w-full !py-3 text-base font-medium w-full my-1 text-center !bg-gray-200/80 !text-gray-500 hover:!bg-gray-200 hover:!text-gray-400">
                        No
                    </Button>
                </div>
            </div>
        </FormStepLayout>
    );
}
