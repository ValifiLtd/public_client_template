export type FormStep = keyof typeof appFormData;

export type FormStepData<T extends FormStep> = typeof appFormData[T];

export type FormStepsData = {
    [key in FormStep]?: Partial<FormStepData<FormStep>>;
};

export const appFormData = {
    splash: {},
    splash2: {},
    misSoldCarFinanceClaim: {
    },
    dateOfBirth: {
        birthDate:''
    },
    name: {
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        birthDate: "",
    },
    address: {
        postcode:""
    },
    pickAddress:{
    },
    contact:{
        mobileNumber: "",
        email: "",
    },
    verifyNow: {},
    verify1: {},
    verify2: {},
    verify3: {},
    findingAgreements: {},
    pcpClaims: {},
    signature: {},
};