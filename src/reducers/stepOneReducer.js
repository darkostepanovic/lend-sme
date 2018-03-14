import {
    TOGGLE_NEW_PERSON_DATA, HANDLE_COMPANY_OWNER_DATA, HANDLE_FORM_DATA,
    HANDLE_NEW_PERSON_DATA
} from "../actions/types";

const initialState = {
    formData: {
        title: '1',
        firstName: '',
        lastName: '',
        signingAuthority: 1,
        function: '',
        dob: '',
        streetAddress: '',
        addressNumber: '',
        postcode: '',
        city: '',
        country: '',
        phone: '',
        companyOwnerInfo: {
            firstName: '',
            lastName: '',
            dob: {},
            streetAddress: '',
            addressNumber: '',
            postcode: '',
            city: '',
            country: ''
        },
        newPersonInfo: {
            title: '1',
            firstName: '',
            lastName: '',
            signingAuthority: 0,
            function: '',
            phone: '',
            streetAddress: '',
            addressNumber: '',
            postcode: '',
            city: '',
            country: '',
            email: '',
            emailValid: false

        }
    },
    addNewPerson: false
};

export default function stepOneReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_FORM_DATA:
            const key = action.payload.key;
            const val = action.payload.val;
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [key]: val
                }
            };
        case HANDLE_COMPANY_OWNER_DATA:
            const companyOwnerKey = action.payload.key;
            const companyOwnerVal = action.payload.val;
            return {
                ...state,
                formData: {
                    ...state.formData,
                    companyOwnerInfo: {
                        ...state.formData.companyOwnerInfo,
                        [companyOwnerKey]: companyOwnerVal
                    }
                }
            };
        case HANDLE_NEW_PERSON_DATA:
            const newPersonKey = action.payload.key;
            const newPersonVal = action.payload.val;
            return {
                ...state,
                formData: {
                    ...state.formData,
                    newPersonInfo: {
                        ...state.formData.newPersonInfo,
                        [newPersonKey]: newPersonVal
                    }
                }
            };
        case TOGGLE_NEW_PERSON_DATA:
            return {
                ...state,
                addNewPerson: !state.addNewPerson
            };
        default:
            return state;
    }
}