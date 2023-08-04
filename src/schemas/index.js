import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    number : Yup.number().typeError("Invalid number").positive("A number can't start with a minus").integer("A phone number can't contain decimal").required("Contact number is required")
});