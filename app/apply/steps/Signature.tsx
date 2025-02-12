import React, {useContext} from "react";
import {ApplicationFormContext} from "../ApplicationForm";
import {useToastMessage} from "../../../hooks/useToastMessage";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";

export default function Signature() {
    const {onNext, onPrev, formData} = useContext(ApplicationFormContext);
    const {toast} = useToastMessage();

    return (
        <FormStepLayout
            backButtonOnClick={() => onPrev({})}
        >
            <div className="relative sm:col-span-6 flex flex-col items-center gap-2 w-full md:mx-auto md:max-w-[500px]">
                <div className={"flex flex-col gap-y-6 mt-10 mb-4"}>
                    <img className={"mx-auto max-w-[240px]"} src="trustpilot-4.svg" alt=""/>
                    <img className={"mx-auto max-w-[170px]"} src="ssl_secured.png" alt=""/>
                </div>

                <button
                    className="border border-[#07b67a] px-8 py-2 bg-white rounded-md font-medium mt-2">
                    View Files
                </button>

                <p className={"mt-4 font-semibold"}>Sign Here to Submit your claim(s)</p>
                <div className={"w-full border border-gray-800 text-sm mb-3 px-3 pt-3 pb-24"}>

                </div>

                <Button
                    type="success"
                    onClick={() => {
                        // onNext({}, "")
                    }}
                    className="mt-1 mb-3 py-4 md:w-full text-base font-medium w-full my-1 text-center">
                    Submit
                </Button>

                <p className="text-gray-600 leading-relaxed text-[13px] text-center">
                    By signing, you confirm that you are authorising all documents related to your claim. Copies will be
                    emailed to you once the third party begins the process, and they will keep you informed throughout.
                    You acknowledge that you are not required to use a third party to make a complaint on your behalf.
                    You also consent to your electronic signature being applied to all relevant Letters of Authority and
                    Conditional Fee Agreements associated with your claim.
                </p>

            </div>
        </FormStepLayout>
    );
}
