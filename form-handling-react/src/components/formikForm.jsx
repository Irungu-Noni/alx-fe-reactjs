import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const registerTheUser = async (userData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('User has been registered:', userData);
            resolve({ success: true });
        }, 500);
    });
};

const validationSchema = Yup.object({
    username: Yup.string().required('The Username is required'),
    email: Yup.string().email('The email is invalid').required('The Email is required'),
    password: Yup.string().min(6, 'The password must be at least 6 characters').required('The Password is required'),
});

function FormikForm() {
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    await registerTheUser(values);
                    alert('Registration is a success!!!');
                } catch (err) {
                    alert('Registration Failure');
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
                <h2>Register (Formik)</h2>

                <div>
                    <Field name="username" placeholder="Input the Username" />
                    <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
                </div>

                <div>
                    <Field name="email" type="email" placeholder="Input the Email" />
                    <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
                </div>

                <div>
                    <Field name="password" type="password" placeholder="Input the Password" />
                    <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
                </div>

                <button type="submit">Register Here</button>
            </Form>
        </Formik>
    );
}

export default FormikForm;