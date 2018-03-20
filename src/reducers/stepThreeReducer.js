import {HANDLE_COLLATERAL, HANDLE_LOAN_DETAILS} from "../actions/types";

const initialState = {
    loanAmount: '',
    loanCategory: '',
    loanTerm: '12',
    loanDescription: '',
    collateral: {
        promisaryNote: false,
        bankGuarantee: false,
        jointGuarantee: false,
        accountsReceivable: false,
        marketValue: '',
        firstMortgage: '',
        secondMortgage: ''
    }
};

export default function stepTwoReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_LOAN_DETAILS:
            const loanDetailsKey = action.payload.key;
            const loanDetailsValue = action.payload.val;
            return {
                ...state,
                [loanDetailsKey]: loanDetailsValue
            };
        case HANDLE_COLLATERAL:
            const collateralKey = action.payload.key;
            const collateralValue = action.payload.val;
            return {
                ...state,
                collateral: {
                    ...state.collateral,
                    [collateralKey]: collateralValue
                }
            };
        default:
            return state
    }
}