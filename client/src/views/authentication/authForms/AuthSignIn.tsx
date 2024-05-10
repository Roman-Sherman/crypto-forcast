import {
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';

import "./AuthForm.css";

const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 charactervalues: { email: string; password: string; }s length')
        .required('Password is required')
});

const AuthSignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            console.log('submit')
        },
    });

    return (
        <>
            <Typography fontWeight="700" variant="h3" mb={1}>
                Sign In
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <Stack>
                    <Box>
                        <CustomFormLabel>Email</CustomFormLabel>
                        <CustomTextField
                            fullWidth
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>
                    <Box mb={3}>
                        <CustomFormLabel>Password</CustomFormLabel>
                        <CustomTextField
                            fullWidth
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Box>
                </Stack>
                <Box my={3}>
                    <Button
                        className="submit-btn"
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                    >
                        Log In
                    </Button>
                </Box>
            </form>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>New to Crypto Predictor?</Typography> &nbsp;
                <Link className='link-btn' to='/auth/sign-up'>Sign Up</Link>
            </Box>
        </>
    );
}

export default AuthSignIn;
