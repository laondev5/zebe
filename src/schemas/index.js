import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginSchema = yup.object().shape({
    name:yup.string().required('Fullname is required').min(4),
    email:yup.string().email('Please enter a valied email address').required('email is required').matches(emailRules, {message:'invalied email'}),
    password:yup.string().required('password is required').min(8).matches(passwordRules, {message:' 0ne uppercase latter one number and one lowercase letter'})
})

const registerSchema = yup.object().shape({
    name:yup.string().required('Fullname is required').min(4),
    email:yup.string().email('Please enter a valied email address').required('email is required').matches(emailRules, {message:'invalied email'}),
    password:yup.string().required('password is required').min(8).matches(passwordRules, {message:' 0ne uppercase latter one number and one lowercase letter'}),
    confirmPassword:yup.string().required('required').oneOf([yup.ref('password'), null], 'passwords does not match') 
})

export {loginSchema, registerSchema}