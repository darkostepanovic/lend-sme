import {HANDLE_COMPANY_GENERAL_INFORMATION, HANDLE_COMPANY_HEADQUARTERS_INFORMATION} from "../actions/types";

const initialState = {
    generalInfo: {
        companyName: '',
        industry: '0',
        legalForm: '0',
        numberOfEmployees: '0',
        foundationDate: '',
        companyEmail: '',
        emailValid: false
    },
    headquartersInfo: {
        address: '',
        addressNumber: '',
        postcode: '',
        city: '',
        country: '',
        uid: ''
    },
    other: {
        website: ''
    }
};

export default function stepTwoReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_COMPANY_GENERAL_INFORMATION:
            const key = action.payload.key;
            const val = action.payload.val;
            return {
                ...state,
                generalInfo: {
                    ...state.generalInfo,
                    [key]: val
                }
            };
        case HANDLE_COMPANY_HEADQUARTERS_INFORMATION:
            const hqKey = action.payload.key;
            const hqVal = action.payload.val;
            return {
                ...state,
                headquartersInfo: {
                    ...state.headquartersInfo,
                    [hqKey]: hqVal
                }

            };
        default:
            return state
    }
}