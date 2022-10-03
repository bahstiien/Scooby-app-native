import React from 'react';
import { Text, View } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export default function Login() {
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
            Login
          </Text>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
          >
            <TextInput
              icon="paperclip"
              name="email"
              placeholder="Enter your email"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
          >
            <TextInput
              icon="key"
              name="password"
              placeholder="Enter your password"
              secureTextEntry
              autoCompleteType="password"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
          </View>
          <Button label="Login" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
