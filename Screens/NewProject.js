import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-native-date-picker';
import SelectList from 'react-native-dropdown-select-list';

const LoginSchema = Yup.object().shape({
  nameOfProject: Yup.string().required('Required'),
});

export default function NewProject() {
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = React.useState('');

  const data = [{ key: '1', value: 'Jammu & Kashmir' }];

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
            Nouveau projet de ses morts
          </Text>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
          >
            <TextInput
              icon="modern-mic"
              name="email"
              placeholder="Nom"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange('nameOfProject')}
              onBlur={handleBlur('nameOfProject')}
              value={values.nameOfProject}
            />
          </View>

          <SelectList
            setSelected={setSelected}
            data={data}
            onSelect={() => alert(selected)}
          />

          <Button label="Créer le projet" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
