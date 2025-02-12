import React, {useContext} from "react";

import {AnimatePresence, motion} from "framer-motion";
import {FormStep} from "./appFormData";
import {ApplicationFormContext} from "./ApplicationForm";
import Splash from "./steps/Splash";
import Splash2 from "./steps/Splash2";
import Name from "./steps/Name";
import PickAddress from "./steps/PickAddress";
import Address from "./steps/Address";
import Contact from "./steps/Contact";
import VerifyNow from "./steps/VerifyNow";
import Verify1 from "./steps/Verify1";
import Verify2 from "./steps/Verify2";
import Verify3 from "./steps/Verify3";
import MisSoldCarFinanceClaim from "./steps/MisSoldCarFinanceClaim";
import DateOfBirth from "./steps/DateOfBirth";
import FindingAgreements from "./steps/FindingAgreements";
import Signature from "./steps/Signature";
import PcpClaims from "./steps/PcpClaims";

function getFormStepComponent(name: FormStep) {
    if (name === "splash") return <Splash/>;
    if (name === "splash2") return <Splash2/>;
    if (name === "misSoldCarFinanceClaim") return <MisSoldCarFinanceClaim/>;
    if (name === "dateOfBirth") return <DateOfBirth/>;
    if (name === "name") return <Name/>;
    if (name === "address") return <Address/>;
    if (name === "pickAddress") return <PickAddress/>;
    if (name === "contact") return <Contact/>;
    if (name === "verifyNow") return <VerifyNow/>;
    if (name === "verify1") return <Verify1/>;
    if (name === "verify2") return <Verify2/>;
    if (name === "verify3") return <Verify3/>;
    if (name === "findingAgreements") return <FindingAgreements/>;
    if (name === "pcpClaims") return <PcpClaims/>;
    if (name === "signature") return <Signature/>;

    return <Splash/>;
}

export default function FormStepLoader() {
    const {currentStep} = useContext(ApplicationFormContext);

    if (!currentStep) {
        return <Splash/>;
    }

    return (
        <AnimatePresence mode={"wait"}>
            <motion.div
                key={currentStep}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    type: "keyframes",
                    duration: .16,
                    ease: "easeIn"
                }}
                className={"my-auto"}
            >
                {getFormStepComponent(currentStep as FormStep)}
            </motion.div>
        </AnimatePresence>

    )
}