import { Box, Text, HStack } from "native-base";
import React from "react";
import DashboardSingleNews from "./DashboardSingleNews";

const DashboardLatestNews = () => {
  return (
    <Box py='7' mb='6' shadow='2' rounded='md' w='326' h='574' background='background.900'alignItems='center'  >
        <HStack mb='4'>
            <Text fontSize='xl' fontWeight='600' color='font.200'>Latest News</Text>
        </HStack>
      <DashboardSingleNews
        header="E-COMMERCE TIPS"
        content="13 tips on How to Write a Business Plan with success"
        quote="Stima lettura: 5 min"
        img=""
      />
      <DashboardSingleNews
        header="E-COMMERCE TIPS"
        content="10 profitable Things to make and sell Online for..."
        quote="Stima lettura: 5 min"
        img=""
      />
      <DashboardSingleNews
        header="E-COMMERCE TIPS"
        content="10 profitable Things to make and sell Online for..."
        quote="Stima lettura: 5 min"
        img=""
      />
          <HStack>
            <Text underline={true} color='btn.500'>Visita il nostro Blog</Text>
        </HStack>
    </Box>
  );
};

export default DashboardLatestNews;
