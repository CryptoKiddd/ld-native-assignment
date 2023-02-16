import { View} from 'native-base'
import React from 'react'
import CustomForms from '../components/CustomForms'

const Register = () => {
  return (
    <View>
    <CustomForms 
    inputs={['name','email','password']}
    title='Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti. Nessuna carta di credito richiesta.' 
    subHeader='Create your e-commerce'
     btntext='Create your shop'
     context='register' />
  </View>
  )
}

export default Register