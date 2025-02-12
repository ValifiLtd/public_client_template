import React, {useContext} from "react";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";
import Radio from "../../components/ui/Radio";
import {Stepper} from "./Verify1";

export default function Verify3() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();
    const [value, setValue] = React.useState(1);

    const steps = [
        {number: 1, active: true},
        {number: 2, active: true},
        {number: 3, active: true},
    ];

    return (
        <FormStepLayout
            backButtonOnClick={() => onPrev({})}
        >
            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <div className={"md:mt-10 fixed md:static top-[7rem]"}>
                    <Stepper steps={steps}/>
                </div>

                <h1 className={"mt-10 font-semibold text-2xl md:text-3xl text-center my-6"}>
                    Who Is Your Account Provider?
                </h1>

                <p className={"italic"}>
                    Your Equifax credit file indicates that you may
                    have a current account opened on or around May
                    2024 and updated in January 2025.
                </p>
            </div>

            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <div className={"border border-purple-100 rounded-lg px-5 py-5 w-full bg-white"}>
                    <p className={"mb-4 font-medium"}>Select one</p>
                    <Radio
                        label={""}
                        onChange={(e) => {
                            setValue(e.value)
                        }}
                        value={value}
                        className={"w-full"}
                        containerClassName={"flex-col gap-y-3 w-full"}
                        name={"radio"}
                        options={[
                            {text: "NATIONWIDE BUILDING SOCIETY", value: 1},
                            {text: "BARCLAYS BANK", value: 2},
                            {text: "ULSTER BANK LTD", value: 3},
                            {text: "FIRST DIRECT", value: 4},
                            {text: "NONE OF THE ABOVE", value: 5},
                        ]}/>
                </div>
            </div>

            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                    <Button
                        type="success"
                        onClick={() => {
                            onNext({}, "findingAgreements")
                        }}
                        className="md:w-full text-base font-medium w-full my-1 text-center">
                        See Your Claims
                    </Button>

            </div>
        </FormStepLayout>
    );
}
