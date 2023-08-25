import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from 'react-native';
import {Color} from '../ui-Kit/Color';
import {
  Car,
  Check,
  Email,
  Eye,
  Eyes,
  Fb,
  Google,
  Lock,
  Twitter,
  UnCheck,
  User,
} from '../assets/Svgs';
import {TextInput} from 'react-native';
import {Vertical} from '../ui-Kit/Spacer';

const LandingPage = () => {
  const [isvisibleEyes, SetVisibleEyes] = useState(false);
  const [isvisibleEye, SetVisibleEye] = useState(false);
  const [check, Setcheck] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const FormValidation = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPasswordMatch = password === confirmPassword;

    if (username === '') {
      Alert.alert('Username is required.');
      return;
    }
    if (!isEmailValid) {
      Alert.alert('Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid) {
      Alert.alert(
        'Password must have at least 8 characters, one special character, one number, and one uppercase letter.',
      );
      return;
    }
    if (!isPasswordMatch) {
      Alert.alert('Passwords do not match.');
    }
    if (!check) {
      Alert.alert('Accept Terms & Conditions');
      return;
    }
    if (
      isEmailValid &&
      isPasswordValid &&
      isPasswordMatch &&
      username !== '' &&
      check
    ) {
      setModalVisible(true);
    }
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text === '' || validateEmail(text)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalMidContainer}>
            <Text style={{fontFamily: 'Poppins', fontSize: 24, color: 'green'}}>
              Registration Successful ✅
            </Text>
            <Text style={styles.modalText}>Username: {username} </Text>
            <Text style={styles.modalText}>Email: {email}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.subHeader}>
        <View style={styles.header}>
          <Car />
        </View>
      </View>
      <View style={styles.midContainer}>
        <ScrollView style={styles.subContainer}>
          <View style={styles.subContainer}>
            <View style={styles.headerText}>
              <Text style={styles.headerFont}>SignUp</Text>
              <Text style={styles.headerSubFont}>
                Get Your Car Sparkling Clean
              </Text>
            </View>
            <View style={styles.textInput}>
              <View style={styles.inputIcon}>
                <User />
              </View>
              <TextInput
                style={styles.inputFeild}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.textInput}>
              <View style={styles.inputIcon}>
                <Email />
              </View>
              <TextInput
                style={styles.inputFeild}
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
              />
            </View>

            <View style={styles.textInput}>
              <View style={styles.inputIcon}>
                <Lock />
              </View>
              <TextInput
                secureTextEntry={!isvisibleEye}
                style={styles.inputFeild}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => SetVisibleEye(!isvisibleEyes)}>
                {!isvisibleEye ? <Eye /> : <Eyes />}
              </TouchableOpacity>
            </View>

            <View style={styles.textInput}>
              <View style={styles.inputIcon}>
                <Lock />
              </View>
              <TextInput
                style={styles.inputFeild}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => SetVisibleEyes(!isvisibleEyes)}>
                {!isvisibleEyes ? <Eye /> : <Eyes />}
              </TouchableOpacity>
            </View>

            <View style={styles.checkbox}>
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => Setcheck(!check)}>
                  {check ? <Check /> : <UnCheck />}
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: 12}}>
                <Text style={{color: Color.white}}>
                  I Agree to the Terms and Conditions, Privacy Policy & Medical
                  Disclaimer
                </Text>
              </View>
            </View>
            <Vertical size={20} />
            <View style={styles.btn}>
              <TouchableOpacity onPress={FormValidation}>
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Vertical size={12} />
            <View
              style={{
                backgroundColor: Color.white,
                width: '76%',
                height: 1,
                alignSelf: 'center',
                marginTop: 8,
              }}></View>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 12,
                color: Color.white,
                fontFamily: 'Poppins-Regular',
              }}>
              OR
            </Text>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Fb />
              </TouchableOpacity>
              <TouchableOpacity>
                <Google />
              </TouchableOpacity>
              <TouchableOpacity>
                <Twitter />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '40%',
    backgroundColor: Color.pink,
    height: '90%',
    borderRadius: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeader: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  midContainer: {
    flex: 5,
    height: '100%',
  },
  subContainer: {
    backgroundColor: Color.pink,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
    height: 'auto',
    margin: 10,
  },
  headerFont: {
    color: Color.white,
    fontSize: 50,
    fontFamily: 'Montserrat-Bold',
    margin: 4,
  },
  headerSubFont: {
    color: Color.white,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  textInput: {
    width: '80%',
    height: '12%',
    backgroundColor: Color.white,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  inputIcon: {
    paddingHorizontal: 20,
  },
  inputFeild: {
    backgroundColor: Color.white,
    width: '60%',
  },
  eyeIcon: {
    paddingLeft: 14,
  },
  checkbox: {
    width: '70%',
    height: 'auto',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: Color.white,
    width: '62%',
    height: '12%',
    alignSelf: 'center',

    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Color.dark_pink,
    fontWeight: '400',
    fontSize: 20,
    fontFamily: 'Poppins',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '8%',
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalMidContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  modalCloseText: {
    color: 'blue',
    marginTop: 20,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
  },
});

export default LandingPage;
