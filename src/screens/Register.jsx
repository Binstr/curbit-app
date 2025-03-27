import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { AuthContext } from '../context/AuthContext';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const { setUser, setRole: setGlobalRole } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setGlobalRole(role);
      localStorage.setItem('role', role); // optional
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <Text>Role (type: admin, provider, or customer)</Text>
      <TextInput style={styles.input} value={role} onChangeText={setRole} />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});