import React, {useContext} from "react";
import {useForm} from "@tanstack/react-form";
import FormStepLayout from "../FormStepLayout";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import {FormStepData} from "../appFormData";
import Button from "../../components/ui/Button";
import OptionPicker from "../../components/ui/OptionPicker";
import Input from "../../components/ui/Input";

export default function Name() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    const form = useForm<FormStepData<"name">>({
        defaultValues: formData?.name as any,
        onSubmit: async ({value}) => {
            onNext(value, "contact");
        },
    });

    return (
        <FormStepLayout
            title={"What's your name?"}
            subtitle={
                <span className={"text-gray-500"}>
            Please make sure to include all the names that appear on your driver&apos;s license/passport.
                </span>
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
                <div className="sm:col-span-6 flex items-center gap-x-3 -mb-3">
                    <form.Field
                        name="title"
                        validators={{}}
                    >
                        {(field) => (
                            <OptionPicker<string>
                                label={"Title"}
                                containerClassName={"flex flex-col w-full gap-y-2"}
                                className={"grid grid-cols-4 gap-2 w-fit md:w-auto"}
                                itemClassName={"px-4"}
                                options={["Mr", "Miss", "Mrs", "Ms"].map(i => ({value: i, label: i}))}
                                onSelect={({value}) => {
                                    field.handleChange(value)
                                }}
                                value={field.state.value}
                                errors={field.state.meta.errors.map(String)}
                            />
                        )}
                    </form.Field>
                </div>

                <div className="sm:col-span-6">
                    <form.Field
                        name="firstName"
                        validators={{}}
                    >
                        {(field) => (
                            <Input
                                autoFocus
                                label="First Name"
                                type="text"
                                placeholder="First name"
                                autoComplete={"given-name"}
                                className={"w-full"}
                                name={field.name}
                                value={field.state.value || ""}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                errors={field.state.meta.errors.map(String)}
                                invalid={field.state.meta.errors.length > 0}
                            />
                        )}
                    </form.Field>
                </div>

                <div className="sm:col-span-6">
                    <form.Field
                        name="middleName"
                    >
                        {(field) => (
                            <Input
                                label="Middle Name"
                                type="text"
                                placeholder="Middle Name"
                                className={"w-full"}
                                name={field.name}
                                value={field.state.value || ""}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                errors={field.state.meta.errors.map(String)}
                                invalid={field.state.meta.errors.length > 0}
                            />
                        )}
                    </form.Field>
                </div>

                <div className="sm:col-span-6">
                    <form.Field
                        name="lastName"
                    >
                        {(field) => (
                            <Input
                                label="Last Name"
                                type="text"
                                placeholder="Last Name"
                                autoComplete="family-name"
                                className={"w-full"}
                                name={field.name}
                                value={field.state.value || ""}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                errors={field.state.meta.errors.map(String)}
                                invalid={field.state.meta.errors.length > 0}
                            />
                        )}
                    </form.Field>
                </div>
            </form>
        </FormStepLayout>
                );
            }
