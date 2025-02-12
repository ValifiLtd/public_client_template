import React, {useContext} from "react";
import {useForm} from "@tanstack/react-form";
import FormStepLayout from "../FormStepLayout";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import {FormStepData} from "../appFormData";
import Button from "../../components/ui/Button";
import DateTextBox from "../../components/ui/DateTextBox";

export default function DateOfBirth() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    const form = useForm<FormStepData<"dateOfBirth">>({
        defaultValues: formData?.name as any,
        onSubmit: async ({value}) => {
            onNext(value, "address");
        },
    });

    return (
        <FormStepLayout
            title={"Your Age"}
            subtitle={"What is your Date of Birth?"}
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
                        name="birthDate"
                        validators={{
                            onSubmit: ({value}) => {
                                if (!value) {
                                    return "Birth date is required";
                                }
                            }
                        }}
                    >
                        {(field) => (
                            <DateTextBox
                                boldAndCentered
                                name={field.name}
                                onChange={(v) => field.handleChange(v)}
                                errors={field.state.meta.errors.map(i => i || "")}
                                invalid={field.state.meta.errors.length > 0}
                                value={field.state.value || ""}
                                onSubmit={() => {
                                    void form.handleSubmit();
                                }}
                            />
                        )}
                    </form.Field>
                    <p className={"text-gray-500 text-sm text-center mt-2"}>You must be over 18</p>
                </div>
            </form>
        </FormStepLayout>
    );
}
