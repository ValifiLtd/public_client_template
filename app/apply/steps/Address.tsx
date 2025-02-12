import React, {useContext} from "react";
import {useForm} from "@tanstack/react-form";
import {useToastMessage} from "../../../hooks/useToastMessage";
import {ApplicationFormContext} from "../ApplicationForm";
import {FormStepData} from "../appFormData";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Address() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    const form = useForm<FormStepData<"address">>({
        defaultValues: formData?.address as any,
        onSubmit: ({value}) => {
            onNext({}, "pickAddress");
        },
    });

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
            backButtonOnClick={() => onPrev({...form.state.values})}
        >
            <form className={"contents"}>
                <div className="sm:col-span-6">
                    <form.Field
                        name="postcode"
                        validators={{}}
                    >
                        {(field) => (
                            <Input
                                autoComplete={"postal-code"}
                                inputClassName={"uppercase placeholder:normal-case"}
                                label="Current Address"
                                placeholder="Add Postcode"
                                name={field.name}
                                onChange={(e) => field.handleChange(e.target.value)}
                                value={field.state.value || ""}
                                onBlur={field.handleBlur}
                                enterKeyHint={"done"}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        void form.handleSubmit();
                                    }
                                }}
                            />
                        )}
                    </form.Field>
                    <Button
                        type="success"
                        onClick={() => {
                            onNext({}, "pickAddress")
                        }}
                        className="mt-3 md:w-full text-base font-medium w-full my-1 text-center">
                  Search
                    </Button>

                    <Button
                        className="mt-3 md:w-full text-sm font-medium w-full my-1 text-center border border-purple-300/50 bg-transparent !text-purple-800">
                  + Add previous address
                    </Button>
                </div>
            </form>
        </FormStepLayout>
    );
}
