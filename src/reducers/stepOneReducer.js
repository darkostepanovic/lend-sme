import { HANDLE_FORM_DATA } from "../actions/types";

const initialState = {
    formData: {
        title: '1',
        firstName: '',
        lastName: '',
        signingAuthority: 0,
        function: '',
        dob: '',
        streetAddress: '',
        addressNumber: '',
        postcode: '',
        city: '',
        country: '',
        phone: ''
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
        default:
            return state;
    }
}