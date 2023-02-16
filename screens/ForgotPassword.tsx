import { View} from 'native-base'

import CustomForms from '../components/CustomForms'

const ForgotPassword = () => {
  return (
    <View>
    <CustomForms 
    inputs={['email']}
    title='Enter your email and you will receive an email to recover your password' 
    subHeader='Forgot Password'
     btntext='Login'
     context='forgot' />
  </View>
  )
}

export default ForgotPassword