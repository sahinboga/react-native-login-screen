import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { useTheme } from 'react-native-paper';

export default function App() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#5555' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Hoşgeldiniz!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >
        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>Kullanıcı Adı</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Kullanıcı Adı"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
          />
        </View>
        <Text style={[styles.text_footer, {
          color: colors.text,
          marginTop: 35
        }]}>Şifre</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Şifreniz"
            placeholderTextColor="#666666"
            secureTextEntry={true}
            style={[styles.textInput, {
              color: colors.text
            }]}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
        >
          <Text style={{ color: '#009387', marginTop: 15 }}>Şifremi unuttum?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.signIn}
          >
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>Giriş Yap</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.signIn, {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, {
              color: '#009387'
            }]}>Üye Ol</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
