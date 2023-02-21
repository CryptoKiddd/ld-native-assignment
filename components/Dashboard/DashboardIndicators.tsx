import { HStack, Box, Text, Image } from "native-base";

const DashboardIndicators = () => {
  return (
    <Box mt="-20" alignItems="center">
      {/* configuration */}
      <Box
        p="4"
        shadow="4"
        mb="6"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="md"
        bgColor="background.900"
        w="326"
        h="300"
      >
        <HStack
          space={2}
          justifyContent="space-between"
          alignItems="center"
          mt="4"
          mb="1"
        >
          <Image
            resizeMode="contain"
            ml="-2"
            alt="tool"
            source={require("../../assets/Icons/tool.png")}
          />
          <Text color="font.200" fontSize="xl" fontWeight="600">
            Configura la tua vetrina
          </Text>
        </HStack>

        <Text w="98" textAlign="center" fontSize="3xl" color="btn.900">
          {" "}
          0%{" "}
        </Text>
        <Text w="98" mt="-6" textAlign="center" fontSize="md" color="btn.900">
          completato
        </Text>
        <Text color="font.100" w="290" textAlign="center" px="4">
          Completa tutti i step per ricevere maggiore visibilità e una vetrina
          accattivante{" "}
        </Text>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <Text color="btn.500">Completa la configurazione!</Text>
          <Image
            alt="arrow-right"
            source={require("../../assets/Icons/arrow-right.png")}
          />
        </HStack>
      </Box>
      {/* visitors */}
      <Box
        shadow="4"
        mb="6"
        p="6"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="md"
        bgColor="background.900"
        w="326"
        h="180"
      >
        <HStack justifyContent="space-between" w="100%" alignItems="center">
          <HStack justifyContent="space-between" alignItems="center" w="40%">
            <Image
              alt="arrow-right"
              source={require("../../assets/Icons/eye.png")}
            />
            <Text fontSize="xl" fontWeight="600" color="font.200">
              Visitors
            </Text>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center" w="33%">
           
            <Text fontSize="sm" color="font.100">
            This Month
          </Text>
          <Image
              alt="arrow-right"
              source={require("../../assets/Icons/ArrDown.png")}
            />
          </HStack>
          
        </HStack>

        <Text fontSize="4xl" fontWeight="600" color="font.200">
          0
        </Text>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <Text color="btn.500">Vuoi ricevere più visite? Contattaci!</Text>
          <Image
            alt="arrow-right"
            source={require("../../assets/Icons/arrow-right.png")}
          />
        </HStack>
      </Box>
      {/* orders */}
      <Box
        shadow="4"
        mb="6"
        p="6"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="md"
        bgColor="background.900"
        w="326"
        h="209"
      >
        <HStack justifyContent="space-between" w="100%" alignItems="center">
          <HStack justifyContent="space-between" alignItems="center" w="40%">
            <Image
              alt="arrow-right"
              source={require("../../assets/Icons/list.png")}
            />
            <Text fontSize="xl" fontWeight="600" color="font.200">
              Orders
            </Text>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center" w="33%">
           
           <Text fontSize="sm" color="font.100">
           This Month
         </Text>
         <Image
             alt="arrow-right"
             source={require("../../assets/Icons/ArrDown.png")}
           />
         </HStack>
         
        </HStack>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <Text fontSize="md" color="font.100" fontWeight="600">
            Orders received:
          </Text>
          <Text fontSize="2xl" fontWeight="600" color="font.200">
            0
          </Text>
        </HStack>
        <HStack
          mt="-4"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="md" color="font.100" fontWeight="600">
            Earnings:
          </Text>
          <Text fontSize="2xl" fontWeight="600" color="font.200">
            € 0,00
          </Text>
        </HStack>
        <HStack w="100%" alignItems="center" justifyContent="space-between">
          <Text color="btn.500">10 free tips to increase your sales</Text>
          <Image
            alt="arrow-right"
            source={require("../../assets/Icons/arrow-right.png")}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default DashboardIndicators;
