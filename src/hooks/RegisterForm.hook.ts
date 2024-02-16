'use client'
import { RegisterUser } from '@/services/RegisterService';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export interface FormValues {
    username: string;
    email: string;
    password: string;
    confPassword: string;
}

export interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
    confPassword?: string;
}

type ValidateFunction = (values: FormValues) => FormErrors;

const useRegisterForm = (initialState: FormValues, validateRegister: ValidateFunction) => {
    const [values, setValues] = useState<FormValues>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validateRegister(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Values are valid!');
            RegisterUser(dispatch, values.email, values.password);
            setValues(initialState);
        } else {
            console.log('Data is invalid');
            console.log(validationErrors);
        }
    };

    return { handleChange, handleSubmit, values, errors, setValues };
}

export default useRegisterForm;