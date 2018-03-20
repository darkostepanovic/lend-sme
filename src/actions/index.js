import {
    HANDLE_FORM_DATA, HANDLE_COMPANY_OWNER_DATA, HANDLE_NEW_PERSON_DATA, TOGGLE_NEW_PERSON_DATA,
    HANDLE_COMPANY_GENERAL_INFORMATION, HANDLE_COMPANY_HEADQUARTERS_INFORMATION, HANDLE_LOAN_DETAILS, HANDLE_COLLATERAL
} from "./types";

export const handleFormData = (key, val) => dispatch => {
    if (key === 'firstName' || key === 'lastName' || key === 'function' || key === 'city') {
        let regex = new RegExp("^[a-zA-Z]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_FORM_DATA, payload: {key, val}});
        } else return;
    } else if (key === 'postcode' || key === 'phone') {
        let regex = new RegExp("^[0-9]*$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_FORM_DATA, payload: {key, val}});
        } else return;
    } else if (key === 'streetAddress' || key === 'addressNumber') {
        let regex = new RegExp("^[a-zA-Z\\d\\-_\\s]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_FORM_DATA, payload: {key, val}});
        } else return;
    }
    else {
        dispatch({type: HANDLE_FORM_DATA, payload: {key, val}});
    }

};
export const handleCompanyOwnerData = (key, val) => dispatch => {
    if (key === 'firstName' || key === 'lastName' || key === 'city') {
        let regex = new RegExp("^[a-zA-Z]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COMPANY_OWNER_DATA, payload: {key, val}});
        } else return;
    } else if (key === 'postcode' || key === 'phone') {
        let regex = new RegExp("^[0-9]*$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COMPANY_OWNER_DATA, payload: {key, val}});
        } else return;
    } else if (key === 'streetAddress' || key === 'addressNumber') {
        let regex = new RegExp("^[a-zA-Z\\d\\-_\\s]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COMPANY_OWNER_DATA, payload: {key, val}});
        } else return;
    }
    else {
        dispatch({type: HANDLE_COMPANY_OWNER_DATA, payload: {key, val}});
    }
};
export const handleNewPersonData = (key, val) => dispatch => {
    if (key === 'firstName' || key === 'lastName' || key === 'function' ||  key === 'city') {
        let regex = new RegExp("^[a-zA-Z]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key, val}});
        } else return;
    } else if (key === 'postcode' || key === 'phone') {
        let regex = new RegExp("^[0-9]*$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key, val}});
        } else return;
    } else if (key === 'streetAddress' || key === 'addressNumber') {
        let regex = new RegExp("^[a-zA-Z\\d\\-_\\s]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key, val}});
        } else return;
    } else if (key === 'email') {
        let regex = new RegExp('([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\\.[\\w]{2,4}');
        if(regex.test(val)) {
            let emailValidkey = 'emailValid';
            let emailValidVal = true;
            dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key: emailValidkey, val: emailValidVal}});
            dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key, val}});
        } else {
            let emailValidkey = 'emailValid';
            let emailValidVal = false;
            dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key: emailValidkey, val: emailValidVal}});
            dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key, val}});
        }
    }
    else {
        dispatch({type: HANDLE_NEW_PERSON_DATA, payload: {key, val}});
    }
};
export const handleCompanyGeneralInfo = (key, val) => dispatch => {
    if(key === 'companyName') {
        let regex = new RegExp("^[a-zA-Z]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COMPANY_GENERAL_INFORMATION, payload: {key, val}});
        } else return;
    } else if (key === 'companyEmail') {
        let regex = new RegExp('([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\\.[\\w]{2,4}');
        if(regex.test(val)) {
            let emailValidkey = 'emailValid';
            let emailValidVal = true;
            dispatch({type: HANDLE_COMPANY_GENERAL_INFORMATION, payload: {key: emailValidkey, val: emailValidVal}});
            dispatch({type: HANDLE_COMPANY_GENERAL_INFORMATION, payload: {key, val}});
        } else {
            let emailValidkey = 'emailValid';
            let emailValidVal = false;
            dispatch({type: HANDLE_COMPANY_GENERAL_INFORMATION, payload: {key: emailValidkey, val: emailValidVal}});
            dispatch({type: HANDLE_COMPANY_GENERAL_INFORMATION, payload: {key, val}});
        }
    } else {
        dispatch({type: HANDLE_COMPANY_GENERAL_INFORMATION, payload: {key, val}});
    }
};

export const handleCompanyHeadquartersInfo = (key, val) => dispatch => {
    if(key === 'city') {
        let regex = new RegExp("^[a-zA-Z]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COMPANY_HEADQUARTERS_INFORMATION, payload: {key, val}});
        } else return;
    } else if (key === 'postcode') {
        let regex = new RegExp("^[0-9]*$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COMPANY_HEADQUARTERS_INFORMATION, payload: {key, val}});
        } else return;
    } else if(key === 'address' || key === 'addressNumber') {
        let regex = new RegExp("^[a-zA-Z\\d\\-_\\s]+$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COMPANY_HEADQUARTERS_INFORMATION, payload: {key, val}});
        } else return;
    // } else if (key === 'uid') {
    //     let regex = new RegExp("^[0-9]*$");
    //     if(regex.test(val) || val === '') {
    //         const uid = `CHE-${val.substring(0,3)}.${val.substring(3, 3)}.${val.substring(6, 3)}`;
    //         console.log(uid);
    //         dispatch({type: HANDLE_COMPANY_HEADQUARTERS_INFORMATION, payload: {key, val: uid}});
    //     } else return;
    } else {
        dispatch({type: HANDLE_COMPANY_HEADQUARTERS_INFORMATION, payload: {key, val}});
    }
};

export const handleLoanDetails = (key, val) => dispatch => {
  if (key === 'loanAmount') {
      let regex = new RegExp("^[0-9]*$");
      if(regex.test(val) || val === '') {
          dispatch({type: HANDLE_LOAN_DETAILS, payload: {key, val}});
      } else return;
  // }
  // else if (key === 'loanDescription') {
  //     let regex = new RegExp("^[a-zA-Z\\d\\-_\\s]+$");
  //     if(regex.test(val) || val === '') {
  //         dispatch({type: HANDLE_LOAN_DETAILS, payload: {key, val}});
  //     } else return;
  } else {
      dispatch({type: HANDLE_LOAN_DETAILS, payload: {key, val}});
  }
};

export const handleCollateral = (key, val) => dispatch => {
    if (key === 'marketValue' || key === 'firstMortgage' || key === 'secondMortgage') {
        let regex = new RegExp("^[0-9]*$");
        if(regex.test(val) || val === '') {
            dispatch({type: HANDLE_COLLATERAL, payload: {key, val}});
        } else return;
    } else {
        dispatch({type: HANDLE_COLLATERAL, payload: {key, val}});
    }


};
export const newPersonToggle = () => dispatch => dispatch({type: TOGGLE_NEW_PERSON_DATA});