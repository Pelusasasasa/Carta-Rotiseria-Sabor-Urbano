import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm, formValidations) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    // useEffect(() => {
    //     createValidators();
    // }, [formState])

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])


    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation])


    const onInputChange = ({ target }) => {
        const { name, value, checked, type } = target;
        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const onCheckboxChange = ({target}) => {
        const {name, checked, id} = target;
        setFormState({
            ...formState,
            permiso:{
                ...formState.permiso,
                [id]: checked
            }
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    // const createValidators = () => {

    //     const formCheckedValues = {};

    //     for (const formField of Object.keys(formValidations)) {
    //         const [fn, errorMessage] = formValidations[formField];

    //         formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    //     }

    //     setFormValidation(formCheckedValues);
    // }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onCheckboxChange,

        ...formValidation,
        isFormValid
    }
}