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
import React from "react";
import { FormPropsType } from "../types/types";

import { IMAGES } from "../constants";

const CustomForms = ({
  inputs,
  subHeader,
  context,
  btntext,
  title,
 
}: FormPropsType) => {
  return (
    <Box w="100%" alignItems="center">
      <Box w="90%" alignItems="center" mt="7">
        <Text fontSize="3xl" fontWeight="bold">
          {" "}
          vetrina<Text color="btn.500">live</Text>{" "}
        </Text>
        <Text mt="5" fontSize="3xl">
          {" "}
          {subHeader}{" "}
        </Text>
        <Text px="9" color="font.100" mb="6" textAlign="center">
          {" "}
          {title}{" "}
        </Text>
      </Box>
      <Box w="90%">
        {inputs.map((input) => {
          if (input === "password") {
            return (
              <FormControl mb="4" key={input} isRequired>
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
              <FormControl mb="4" key={input} isRequired>
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
              <FormControl mb="4" key={input} isRequired>
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
      <Button bg="btn.500" w="90%">
        {btntext}
      </Button>
  {/* //  show suggtestion divider user is on login or register page */}
      {context === "login" ? (
        <Box
          w="88%"
          flexDirection="row"
          mt="6"
          alignItems="center"
          justifyContent="center"
        >
          <Divider w="40%" bg="font.100" thickness="1" />
          <Text mx="6">OR</Text>
          <Divider w="40%" bg="font.100" thickness="1" />
        </Box>
      ) : context === "register" ? (
        <Box
          w="88%"
          flexDirection="row"
          mt="6"
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
        <Box w="90%" mt="6" alignItems="center">
          <Button
            colorScheme="dark"
            borderColor="btn.500"
            variant="outline"
            w="100%"
            mb="4"
          >
            Sign In with facebook
          </Button>
          <Button borderColor="btn.500" variant="outline" w="100%" mb="4">
            Sign In with google
          </Button>
        </Box>
      ) : context === "register" ? (
        <Box w="90%" mt="6" alignItems="center">
          <Button borderColor="btn.500" variant="outline" w="100%" mb="4">
            Sign In with facebook
          </Button>
          <Button variant="outline" borderColor="btn.500" w="100%" mb="4">
            {" "}
            Sign In with google
          </Button>
        </Box>
      ) : (
        ""
      )}



{/* //  show text according to context */}
{context === "login" ? 
  <Box alignItems='center'>
    <Text mb='4'>Did you forget your password?</Text>
    <Text>Do not have an account? <Text color='btn.500'>Register now</Text></Text>
  </Box>
    :
    <Text>Do you have an acoount <Text color='btn.500'>Sign in now</Text></Text>
      }



      
    </Box>
  );
};

export default CustomForms;
