import React, {useContext} from "react";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";
import {useForm} from "@tanstack/react-form";
import {FormStepData} from "../appFormData";
import Radio from "../../components/ui/Radio";
import {classNames} from "../../../utils/classNames";

export default function Verify1() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();
    const [value, setValue] = React.useState(1);

    const form = useForm<FormStepData<"verify1">>({
        defaultValues: formData?.name as any,
        onSubmit: async ({value}) => {
            onNext(value, "verify2");
        },
    });

    const steps = [
        {number: 1, active: true},
        {number: 2, active: false},
        {number: 3, active: false},
    ];

    return (
        <FormStepLayout
            actionButtons={
                <Button
                    onClick={() => {
                        if (!form.state.isValid) {
                            toast.error("Please fill in all required fields.");
                            window.scrollTo({top: 0, behavior: "smooth"})
                        }
                        void form.handleSubmit();
                    }}
                    className="order-first md:order-2 px-12">
                    Continue
                </Button>
            }
            backButtonOnClick={() => onPrev({})}
        >
            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <div className={"md:mt-10 fixed md:static top-[7rem]"}>
                    <Stepper steps={steps}/>
                </div>

                <h1 className={"mt-10 font-semibold text-2xl md:text-3xl text-center my-6"}>
                    Who Provides The Finance For Your Mobile Phone?
                </h1>

                <p className={"italic"}>Your Equifax credit file indicates that you may
                    have a mobile phone or broadband account.</p>
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
                            {text: "CARPHONE WAREHOUSE", value: 1},
                            {text: "TALKMOBILE LTD", value: 2},
                            {text: "TALK TALK", value: 3},
                            {text: "EE", value: 4},
                            {text: "NONE OF THE ABOV", value: 5},
                        ]}/>
                </div>
            </div>
        </FormStepLayout>
    );
}


export const Stepper = ({steps}) => {
    return (
        <ul className="flex items-center">
            {steps.map((step, index) => (
                <li key={index} className="flex items-center">
                    <div
                        className={`font-bold w-14 h-12 text-xl flex items-center justify-center rounded-xl transition-all ${
                            step.active
                                ? "bg-[#991FFE] text-white"
                                : "bg-[#eee8f4] text-purple-900"
                        }`}
                    >
                        {
                            step.active ?
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.2941 4.25282C16.1042 4.28414 15.9443 4.38855 15.8144 4.58692L9.53862 14.3175L6.58062 11.2689C6.32579 10.8669 5.83612 10.8356 5.5813 11.1018L4.42208 12.3129C4.16725 12.7149 4.16725 13.2578 4.42208 13.524L8.89905 18.2014C9.15388 18.3371 9.51364 18.619 9.89838 18.619C10.1532 18.619 10.5629 18.478 10.8178 18.0761L18.4926 6.29916C18.7474 5.8972 18.6025 5.52134 18.0928 5.25511L16.8137 4.29458C16.6838 4.22672 16.4839 4.2215 16.2941 4.25282Z"
                                    fill="white"/>
                            </svg>
                                :
                                step.number
                        }
                    </div>

                    {index < steps.length - 1 && (
                        <div className={
                            classNames(
                                "w-14 h-[2px] bg-purple-200 flex-shrink-0",
                            )
                        }></div>
                    )}
                </li>
            ))}
        </ul>
    );
};