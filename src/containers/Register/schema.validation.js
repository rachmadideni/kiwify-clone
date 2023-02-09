import * as yup from "yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .email('O e-mail deve ser válido')
        .required('Esse campo é obrigatório'),
    emailConfirmation: yup
        .string()
        .oneOf([yup.ref('email'), null], 'Os dois e-mails devem ser iguais.')
        .required('Esse campo é obrigatório'),
    password: yup
        .string()
        .required('Esse campo é obrigatório'),
});

export default schema;