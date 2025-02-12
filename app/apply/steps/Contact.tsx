import React, {useContext} from "react";
import {useForm} from "@tanstack/react-form";
import FormStepLayout from "../FormStepLayout";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import {FormStepData} from "../appFormData";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import MaskedTextBox from "../../components/ui/MaskedTextBox";
import {classNames} from "../../../utils/classNames";
import Checkbox from "../../components/ui/Checkbox";

export default function Contact() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    const form = useForm<FormStepData<"contact">>({
        defaultValues: formData?.name as any,
        onSubmit: async ({value}) => {
            onNext(value, "verifyNow");
        },
    });

    return (
        <FormStepLayout
            title={
                <span className={"flex flex-col gap-y-6 mt-10 -mb-4"}>
                    <img className={"mx-auto max-w-[240px]"} src="trustpilot-4.svg" alt=""/>
                    <img className={"mx-auto max-w-[180px]"} src="ssl_secured.png" alt=""/>
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
                <div className={classNames("sm:col-span-6")}>
                    <form.Field
                        name="email"
                    >
                        {(field) => (
                            <Input
                                autoComplete={"email"}
                                label="Email"
                                type="email"
                                placeholder="Email Address"
                                name={field.name}
                                value={field.state.value || ""}
                                onBlur={field.handleBlur}
                                onChange={(e) => {
                                    field.handleChange(e.target.value);
                                }}
                                invalid={field.state.meta.errors.length > 0}
                                errors={field.state.meta.errors.map(String)}
                            />
                        )}
                    </form.Field>
                </div>

                <div className={classNames("sm:col-span-6")}>
                    <form.Field
                        name="mobileNumber"
                    >
                        {(field) => (
                            <MaskedTextBox
                                label="Mobile Number"
                                mask="{\07}000 000000"
                                placeholder="07xxx xxxxxx"
                                name={field.name}
                                value={field.state.value || ""}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange((e.target as any).value)}
                                errors={field.state.meta.errors.map(String)}
                            />
                        )}
                    </form.Field>
                </div>

                <div className={classNames("sm:col-span-6")}>
                    <div className={"flex items-start gap-x-2"}>
                        <Checkbox className={"inline-flex mt-2"} label={""}/>
                        <p>By clicking here you agree to our terms and Privacy Policy.</p>
                    </div>

                    <p className="mt-3 text-gray-500 leading-relaxed text-[13px] text-center md:text-left">
                        I/We understand that Valifi Limited will receive an
                        Electronic Credit Report and a soft footprint will be
                        retained on my/our credit file. I/We authorise Valifi
                        Limited to pass all information collected about me/us
                        concerning my/our claim to (Claims Management
                        Company) to process my/our claim(s). I/We authorise
                        (Claims Management Company) to receive and pass
                        all information about me/us concerning my/our claim
                        to (Law Firm) so that they can provide a valuation
                        report.
                    </p>
                </div>

                <div className={classNames("sm:col-span-6")}>
                    <div className={"mt-2 mb-3"}>
                        <ul className={"flex justify-between items-center gap-4 px-4"}>
                            <li className={"flex flex-col items-center gap-3 flex-1"}>
                                <svg className={"shadow-md shadow-gray-900/5 rounded-lg"} width="57" height="52"
                                     viewBox="0 0 57 52"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56.4" height="52" rx="12" fill="white"/>
                                    <path
                                        d="M39.9715 16.2226L37.7647 14.7226C37.1541 14.3091 36.3176 14.4678 35.909 15.0735L25.0916 31.0255L20.1205 26.0543C19.6013 25.5351 18.7551 25.5351 18.2359 26.0543L16.3465 27.9437C15.8272 28.463 15.8272 29.3091 16.3465 29.8331L23.9907 37.4774C24.4186 37.9053 25.0916 38.2322 25.6974 38.2322C26.3032 38.2322 26.9138 37.8524 27.308 37.2803L40.3272 18.0735C40.7407 17.4678 40.582 16.636 39.9715 16.2226Z"
                                        fill="#67CE8C"/>
                                </svg>
                                <span
                                    className={"text-center font-medium text-sm leading-tight"}>No Win <br/> No Fee*</span>
                            </li>
                            <li className={"flex flex-col items-center gap-3 flex-1"}>
                                <svg className={"shadow-md shadow-gray-900/5 rounded-lg"} width="57" height="52"
                                     viewBox="0 0 57 52"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56.4" height="52" rx="12" fill="white"/>
                                    <path
                                        d="M39.9715 16.2226L37.7647 14.7226C37.1541 14.3091 36.3176 14.4678 35.909 15.0735L25.0916 31.0255L20.1205 26.0543C19.6013 25.5351 18.7551 25.5351 18.2359 26.0543L16.3465 27.9437C15.8272 28.463 15.8272 29.3091 16.3465 29.8331L23.9907 37.4774C24.4186 37.9053 25.0916 38.2322 25.6974 38.2322C26.3032 38.2322 26.9138 37.8524 27.308 37.2803L40.3272 18.0735C40.7407 17.4678 40.582 16.636 39.9715 16.2226Z"
                                        fill="#67CE8C"/>
                                </svg>
                                <span
                                    className={"text-center font-medium text-sm leading-tight"}>Claim up to <br/> £6,600*</span>
                            </li>
                            <li className={"flex flex-col items-center gap-3 flex-1"}>
                                <svg className={"shadow-md shadow-gray-900/5 rounded-lg"} width="57" height="52"
                                     viewBox="0 0 57 52"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56.4" height="52" rx="12" fill="white"/>
                                    <path
                                        d="M39.9715 16.2226L37.7647 14.7226C37.1541 14.3091 36.3176 14.4678 35.909 15.0735L25.0916 31.0255L20.1205 26.0543C19.6013 25.5351 18.7551 25.5351 18.2359 26.0543L16.3465 27.9437C15.8272 28.463 15.8272 29.3091 16.3465 29.8331L23.9907 37.4774C24.4186 37.9053 25.0916 38.2322 25.6974 38.2322C26.3032 38.2322 26.9138 37.8524 27.308 37.2803L40.3272 18.0735C40.7407 17.4678 40.582 16.636 39.9715 16.2226Z"
                                        fill="#67CE8C"/>
                                </svg>
                                <span
                                    className={"text-center font-medium text-sm leading-tight"}>Quick Application</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </form>
        </FormStepLayout>
    );
}
