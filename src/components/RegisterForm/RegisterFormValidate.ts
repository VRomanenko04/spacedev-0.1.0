'use client'
import { FormErrors } from "@/hooks/RegisterForm.hook";

const passwordRegex = /[A-Z]/;

export const validateRegister = (values: { username: any; email: any; password: any; confPassword: any; }) => {
    let errors: FormErrors = {};
    // Проверка на пустые поля
    if (!values.username) {
        errors.username = 'Username is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    }
    if (!values.confPassword) {
        errors.confPassword = 'Confirm password is required';
    } else {
        // Проверка длины пароля
        if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 symbols';
        }
        // Проверка сложности пароля
        if (!passwordRegex.test(values.password)) {
            errors.password = 'Password must contain at least one uppercase letter';
        }
    }
    // Проверка длины Username
    if (values.username && values.username.length < 4) {
        errors.username = 'Username must be at least 4 symbols';
    }
    // Проверка подтверждения пароля
    if (values.password !== values.confPassword) {
        errors.confPassword = 'Passwords do not match';
    }
    return errors;
};