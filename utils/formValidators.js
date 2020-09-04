// Required
export const required = value => value ? undefined : 'Field is required!';

// Email
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

// Password
export const password = value =>
    value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/i.test(value)
        ? '6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
        : undefined;

// Max length
const maxLength = max => value =>  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength6 = value => value.length > 10 ? 'Max simbols is 6!' : undefined;
export const maxLength30 = value => value.length > 30 ? 'Max simbols is 30!' : undefined;

// Min length
export const minLength6 = value => value.length < 6 ? 'Min simbols is 6!' : undefined;