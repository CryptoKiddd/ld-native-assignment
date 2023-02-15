
import { View, Text } from 'native-base'
import CustomForms from '../components/CustomForms'

const Login = () => {
  return (
    <View>
      <CustomForms 
      inputs={['name','email','password']}
      title='Enter your email and password to access your account' 
      header='vetrinalive' 
      subHeader='Welcome'
       btntext='Login'
       context='login' />
    </View>
  )
}

export default Login