import React, {useContext} from "react";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";

export default function PickAddress() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    return (
        <FormStepLayout
            title={"Your finance address history"}
            subtitle={
                <span className={"text-gray-500"}>Please select up to three addresses you&apos;ve lived at that may be linked to your car finance
                    agreements.</span>
            }
            actionButtons={
                <Button
                    onClick={() => {
                        onNext({}, "name")
                    }}
                    className="order-first md:order-2 px-12">
                    Continue
                </Button>
            }
            backButtonOnClick={() => onPrev({})}
        >
            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <div className="bg-blue-50 border rounded-md border-blue-200/80 p-4 mx-auto w-full">
                    <div className="text-sm">
                        <div className="font-bold pb-2">Current Address:</div>
                        <div className={"flex flex-col gap-y-1"}>
                            <div className=" font-medium">Ash Tree Farm</div>
                            <div className=" font-medium">Blakeley Lane</div>
                            <div className=" font-medium">Knutsford</div>
                            <div className=" font-medium">WA16 NZU</div>
                        </div>
                    </div>
                </div>

                <div className={"flex flex-col w-full"}>
                    <Button
                        className="mt-3 md:w-full text-sm font-medium w-full my-1 text-center border border-purple-300/50 bg-transparent !text-purple-800">
                        + Add previous address
                    </Button>
                </div>
            </div>
        </FormStepLayout>
    );
}
