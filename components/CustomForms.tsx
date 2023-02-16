import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Divider,
  Text,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  Button,
} from "native-base";

import { FormPropsType, RootStackParamList } from "../types/types";



const CustomForms = ({
  inputs,
  subHeader,
  context,
  btntext,
  title,
 
}: FormPropsType) => {
 
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  

  return (
    <Box w="100%" h='100%' alignItems="center" bgColor='background.900'>
      <Box w={context==="register"?"95%":'90%'} alignItems="center" mt="7">
        <Text fontSize="3xl" fontWeight="600">
          vetrina<Text color="btn.500">live</Text>
        </Text>
        <Text color='font.200' mt="4" fontSize="3xl">
          {subHeader}
        </Text>
        <Text px="9" color="font.100" mb="6" textAlign="center">
          {title}
        </Text>
      </Box>
      <Box w="90%">
        {inputs.map((input) => {
          if (input === "password") {
            return (
              <FormControl mb="3" key={input} isRequired>
                <Stack>
                  <Input type="password" placeholder="password" />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
            );
          } else if (input === "name") {
            return (
              <FormControl mb="3" key={input} isRequired>
                <Stack>
                  <Input type="text" placeholder="Name and Surname" />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
            );
          } else {
            return (
              <FormControl mb="3" key={input} isRequired>
                <Stack>
                  <Input type="text" placeholder="Email" />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
            );
          }
        })}
      </Box>
      <Button onPress={()=>navigation.navigate(context==='register'?'Login':"Main")} shadow='7' bg="btn.500" w="90%">
        {btntext}
      </Button>

  {/* //  show suggtestion divider user is on login or register page */}
      {context === "login" ? (
        <Box
          w="88%"
          flexDirection="row"
          mt="5"
          alignItems="center"
          justifyContent="center"
        >
          <Divider w="40%" bg="font.100" thickness="1" />
          <Text color='font.100' mx="6">OR</Text>
          <Divider w="40%" bg="font.100" thickness="1" />
        </Box>
      ) : context === "register" ? (
        <Box
          w="88%"
          flexDirection="row"
          mt="5"
          alignItems="center"
          justifyContent="center"
        >
          <Divider w="40%" bg="font.100" thickness="1" />
          <Text mx="6">OR</Text>
          <Divider w="40%" bg="font.100" thickness="1" />
        </Box>
      ) : (
        ""
      )}

      {/* //  show login with google and fb if user is on login or register page */}
      {context === "login" ? (
        <Box w="90%" mt="5" alignItems="center">
          <Button _text={{color:'font.200',fontWeight:600}} borderColor="btn.500" variant="outline" w="100%" mb="3">
            Sign In with facebook
          </Button>
          <Button _text={{color:'font.200',fontWeight:600}} borderColor="btn.500" variant="outline" w="100%" mb="3">
            Sign In with google
          </Button>
        </Box>
      ) : context === "register" ? (
        <Box w="90%" mt="5" alignItems="center">
          <Button _text={{color:'font.200', fontWeight:600}} borderColor="btn.500" variant="outline" w="100%" mb="3">
            Sign In with facebook
          </Button>
          <Button _text={{color:'font.200',fontWeight:600}} variant="outline" borderColor="btn.500" w="100%" mb="3">
         
            Sign In with google
          </Button>
        </Box>
      ) : (
        ""
      )}



{/* //  show text according to context */}
{context === "login" ? 
  <Box alignItems='center'>
    <Text onPress={()=>navigation.navigate('ForgotPassword')} mb='4'>Did you forget your password?</Text>
    <Text>Do not have an account? <Text onPress={()=>navigation.navigate('Register')} color='btn.500'>Register now</Text></Text>
  </Box>
    :<Text>Do you have an acoount? <Text onPress={()=>navigation.navigate('Login')} color='btn.500'>Sign in now</Text></Text>
      }


<Button
  mt='4'
  background='#FFFFFF'
  borderWidth='1'
  borderColor='btn.700'
 _text={{color:'font.200'}}
  borderRadius='full'
  shadow='2'>Support</Button>
      
    </Box>
  );
};

export default CustomForms;
