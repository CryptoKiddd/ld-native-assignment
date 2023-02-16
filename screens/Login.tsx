
import { View } from 'native-base'
import CustomForms from '../components/CustomForms'

const Login = () => {
  return (
    <View>
      <CustomForms 
      inputs={['name','password']}
      title='Enter your email and password to access your account' 
      subHeader='Welcome'
       btntext='Login'
       context='login' />
    </View>
  )
}

export default Login