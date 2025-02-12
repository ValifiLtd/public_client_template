import React, {useContext} from "react";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";

export default function SubmitClaim() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    return (
        <FormStepLayout
            title={"Submit Your Claim"}
            actionButtons={
                <Button
                    onClick={() => {
                    }}
                    className="order-first md:order-2 px-12">
                    Continue
                </Button>
            }
            backButtonOnClick={() => onPrev({})}
        >
            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <p className={"text-center"}>
                    Please read the documents before signing.
                    They allow us to transfer your claim to our
                    third party so they can make a claim on your
                    behalf; this is No-Win No-Fee, so you will only
                    be charged if compensation is recovered.
                </p>

                <button
                    className="border border-[#07b67a] px-8 py-2 bg-white rounded-md font-medium mt-2">
                  View Files
                </button>

                <div className={"w-full border border-gray-300 text-sm rounded-lg my-3 px-3 pt-3 pb-24"}>
                    Sign Here
                </div>

                <p className="text-gray-500 leading-relaxed text-[13px] text-center">
                    To serve you better and speed up the claims process,
                    we`&apos;d like to retrieve and process your information
                    from credit reference agencies. This allows us to
                    identify additional claims, and discover potential
                    savings for you on various services. We`&apos;re also
                    exploring opportunities to offer you exclusive deals on
                    products you`&apos;ll love. Your privacy and the security of
                    your information are our highest priority.
                </p>
            </div>
        </FormStepLayout>
    );
}
