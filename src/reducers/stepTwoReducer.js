import { HANDLE_COMPANY_GENERAL_INFORMATION } from "../actions/types";

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
        default:
            return state
    }
}