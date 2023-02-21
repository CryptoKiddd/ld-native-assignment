import { Box, Text, HStack, Image } from "native-base";
import React from "react";
import DashboardSingleNews from "./DashboardSingleNews";

const DashboardLatestNews = () => {
  return (
    <Box py='7' mb='6' shadow='2' rounded='md' w='326' h='574' background='background.900'alignItems='center'  >
        <HStack mb='7' alignItems='center'  w='90%' justifyContent='flex-start' >
          <Image alt='news' source={require('../../assets/Icons/file-text.png')} />
            <Text ml='8'  fontSize='xl' fontWeight='600' color='font.200'>Latest News</Text>
        </HStack>
      <DashboardSingleNews
        header="E-COMMERCE TIPS"
        content="13 tips on How to Write a Business Plan with success"
        quote="Stima lettura: 5 min"
        img={require("../../assets/Images/Image2.png")}
      />
      <DashboardSingleNews
        header="E-COMMERCE TIPS"
        content="10 profitable Things to make and sell Online for..."
        quote="Stima lettura: 5 min"
        img={require("../../assets/Images/Image.png")}
      />
      <DashboardSingleNews
        header="E-COMMERCE TIPS"
        content="10 profitable Things to make and sell Online for..."
        quote="Stima lettura: 5 min"
        img={require("../../assets/Images/Image2.png")}
      />
          <HStack  w='100%' justifyContent='space-around'>
            <Text underline={true} color='btn.500'>Visita il nostro Blog</Text>
            <Image resizeMode='contain' alt="ddg" source={require("../../assets/Icons/arrow-right.png")}/>

        </HStack>
    </Box>
  );
};

export default DashboardLatestNews;
