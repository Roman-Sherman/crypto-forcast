import { Box, Typography, Button, Stack } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import "./AuthForm.css";

const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    changepassword: yup.string().required('Confirm Password is required').when('password', {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref('password')], 'passwords need to match'),
    }),
});

const AuthRegister = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            changepassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    return (
        <>
            <Typography fontWeight="700" variant="h3" mb={1}>
                Sign Up
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <Stack mb={3}>
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
                        <Box>
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
                        <Box mb={3}>
                            <CustomFormLabel>Confirm Password</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="changepassword"
                                name="changepassword"
                                placeholder="Confirm Password"
                                type="password"
                                value={formik.values.changepassword}
                                onChange={formik.handleChange}
                                error={formik.touched.changepassword && Boolean(formik.errors.changepassword)}
                                helperText={formik.touched.changepassword && formik.errors.changepassword}
                            />
                        </Box>
                    </Stack>
                    <Box my={3}>
                        <Button className="submit-btn" color="primary" variant="contained" size="large" type="submit" fullWidth>
                            Register
                        </Button>
                    </Box>
                </Box>
            </form>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Already have an account?</Typography> 
                <Button className='link-btn' onClick={() => console.log('Sign In')}>Sign In</Button>
            </Box>
        </>
    );
}

export default AuthRegister;
