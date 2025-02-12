"use client";
import React, {useContext} from "react";
import FormStepLayout from "../FormStepLayout";
import Button from "../../components/ui/Button";
import {ApplicationFormContext} from "../ApplicationForm";

export default function Splash2() {
    const {onNext, formData} = useContext(ApplicationFormContext);

    return (
        <div className={"flex flex-col w-full h-full md:h-auto"}>
            <FormStepLayout
                hideBackButton
            >
                <div className="sm:col-span-6 flex flex-col items-center gap-2">
                    <div className="mt-2 flex flex-col items-center w-full">
                        <h1 className={"text-[2rem] md:text-[2rem] mb-2.5 font-bold text-center tracking-tight"}>PCP
                            Claims </h1>
                        <h2 className={"text-[1.25rem] md:text-[1.5rem] md:mt-6 md:mb-3 font-bold text-center tracking-tight"}>You
                            could be owed up to
                            <span className={"text-purple-600"}> £6,600*</span></h2>
                        <Button
                            onClick={() => {
                                onNext({}, "misSoldCarFinanceClaim")
                            }}
                            className="mt-6 py-3.5 text-lg md:w-96 font-semibold my-1 text-center">
                            Let&apos;s Get Started
                        </Button>
                    </div>

                    <div className={"mt-10 mb-3"}>
                        <ul className={"flex justify-between items-center gap-4 px-4"}>
                            <li className={"flex flex-col items-center gap-3"}>
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
                                    className={"text-center font-medium text-sm leading-tight"}>100% No Win No Fee</span>
                            </li>
                            <li className={"flex flex-col items-center gap-3"}>
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
                                    className={"text-center font-medium text-sm leading-tight"}>Free Online Tool</span>
                            </li>
                            <li className={"flex flex-col items-center gap-3"}>
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

                    <div className={"mt-4"}>
                        <img className={"mx-auto max-w-[150px]"} src="trustpilot-3.svg" alt=""/>
                    </div>

                    <div className={"mb-8"}>
                        <img className={"max-w-[300px]"} src="car.png" alt=""/>
                    </div>

                    {/*<p className={"mt-4 mb-6 text-gray-700 text-xl font-medium text-center"}>*/}
                    {/*    It is highly likely that any vehicle bought*/}
                    {/*    after 2007 had some form of hidden*/}
                    {/*    commission that you are now eligible to*/}
                    {/*    claim back!*/}
                    {/*</p>*/}

                    {/*<p className="text-gray-500 leading-relaxed text-[13px] text-center">*/}
                    {/*    Valifi Limited is authorised and regulated by the*/}
                    {/*    Financial Conduct Authority with firm reference*/}
                    {/*    number 1021455. You can check our authorisation*/}
                    {/*    on the FCA Financial Services Register by visiting*/}
                    {/*    the following website: https://register.fca.org.uk.*/}
                    {/*</p>*/}
                    {/*<p className="text-gray-600 leading-relaxed text-[13px] text-center">*/}
                    {/*    Registered address: Alexandra Court, Carrs Rd,*/}
                    {/*    Cheadle SK8 2JY (Company Number: 15968551)*/}
                    {/*    Registered with the Information Commissioner’s*/}
                    {/*    Office: ZA510674*/}
                    {/*</p>*/}
                </div>
            </FormStepLayout>
        </div>
    )
        ;
}
