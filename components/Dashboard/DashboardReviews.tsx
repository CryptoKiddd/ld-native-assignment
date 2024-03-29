import { Box, Divider, HStack, Text, VStack,Image } from "native-base";
import React from "react";

const DashboardReviews = () => {
  return (
    <Box background="#103B66" shadow='2' rounded='md' w='326' h='478' p='6'  mb='6' alignItems='center'>
      <VStack w='280'  >
      <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/captera.png")}/>

        {/* <Text  fontSize="2xl" fontWeight='600' color="background.900">
          Capterra
        </Text> */}
        <Text my='6'   fontSize="md" color="background.900" w='302'>
          Write a <Text color="#00C48C" fontWeight="600">positive </Text>
          review on Capterra and receive the extension with                          {""} {""}
             <Text fontSize='md'  fontWeight="600">50 additional products.</Text>
        </Text>
        <HStack w='100%' space={2}>

        <Text color="#00C48C" underline={true}>
          Write a review on Capterra
        </Text>
        <Image  resizeMode='contain' alt="ddg" source={require("../../assets/Icons/green-right.png")}/>

        </HStack>
      </VStack>
      <Divider orientation="horizontal" bgColor='background.900' my='6'  />
      <VStack w='280'  >
        <HStack>
        <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/star.png")}/>

        <Text  fontSize="2xl" fontWeight='600' color="background.900">
          Trustpilot
        </Text>
        </HStack>
        <Text my='6'   fontSize="md" color="background.900" w='302'>
          Show us yor love by leaving a <Text color="#00C48C" fontWeight="600">positive </Text>
          review ontrust pilot and receive the extension with
             <Text fontSize='md'  fontWeight="600">50 additional products.</Text>
        </Text>
        <HStack w='100%' space={2}>

        <Text color="#00C48C" mb='3' underline={true} >
          Write a review on Trustpilot
        </Text>
        <Image  resizeMode='contain' alt="ddg" source={require("../../assets/Icons/green-right.png")}/>

        </HStack>
        <Text color="background.900" fontSize='xs' >
        * The two promotions are cumulative
        </Text>
      </VStack>
    </Box>
  );
};

export default DashboardReviews;
