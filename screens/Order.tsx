import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import {
  Box,
  HStack,
  Image,
  VStack,
  Text,
  Divider,
  ScrollView,
  Button,
  // TouchableOpacity
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { OrderParamList } from "../types/types";

const Order = () => {
  const { params } = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<OrderParamList>>();
  console.log(params)

  return (
    <ScrollView w="100%" p="4" height='1202'>
      <HStack w="100%" mt='2' mb="4" justifyContent="space-between">
        <Text fontSize='md' >Orders:#{params?.data?.price}</Text>
          <Image
            alt="yay"
            source={require("../assets/Icons/star-filled.png")}
          />
     
        <Text ml="-4" fontWeight="600" color="btn.500">
          Stampa ordine
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("OrderRoot")}>
        <Image alt="yay" source={require("../assets/Icons/x.png")} />
        </TouchableOpacity>
       
      </HStack>
      <HStack
        mb="4"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontWeight="600"
          color="btn.500"
          borderBottomWidth="2"
          borderBottomColor="btn.500"
          p="3"
        >
          Info orders
        </Text>
        <Text fontWeight="600" color="font.200">
          Products
        </Text>
        <Text fontWeight="600" color="font.200">
          Shipping
        </Text>
      </HStack>
      <VStack>
        <VStack>
          <Text color="font.100" fontSize="sm" mb="4">
            {params?.data?.orderedAt}
          </Text>
          <Text color="font.100" fontWeight="600" fontSize="lg" mb="4">
            Client
          </Text>
          <Text color="font.100" mb="2">
            {params?.data?.client}
          </Text>
          <Text color="btn.500" mb="4">
            mariorossi@vetrinalive.it
          </Text>
          <Text color="btn.500" mb="4">
            Telefono: {params?.data?.tel}
          </Text>
          <Text color="font.200" mb="4">
            Codice Fiscale{params?.data?.fiscal}
          </Text>

          <HStack>

          <Image alt="23rd" source={require("../assets/Icons/wapp.png")} />


          <Text color="btn.700" ml="4" fontSize="md" mb="5">
            Contatta su Whatsapp
          </Text>
            
          </HStack>
          <HStack>

          <Image alt="23rd" source={require("../assets/Icons/Fill.png")} />


          <Text color="btn.500" fontSize="md" mb="4" ml='4'>
            Contatta su Telegram
          </Text>
            
          </HStack>

          
        </VStack>
        <Divider orientation="horizontal" />

        <VStack>
          <Text color="font.100" fontWeight="600" fontSize="xl" my="6">
            Shipping Address
          </Text>
          <Text color="font.100" fontSize="md" mb="4">
            {params?.data?.address}
          </Text>
        </VStack>
        <Divider orientation="horizontal" />
        <VStack>
          <Text color="font.100" fontWeight="600" fontSize="xl" my="8">
            Shopping Info
          </Text>
          <Text color="font.100" mb="3">
            Nome corriere:{params?.data?.service}
          </Text>
          <Text color="font.100" mb="5">
            {params?.data?.orderline}
          </Text>
        </VStack>
        <VStack>
          <HStack alignItems="center" space={2}>
            <Image alt="23rd" source={require("../assets/Icons/info.png")} />
            <Text color="font.100">Spedizione Corriere</Text>
            <Image alt="23rd" source={require("../assets/Icons/ArrDown.png")} />
          </HStack>
          <Text color="font.200" mt="2" fontSize="xs" mb="10">
            Se cambi la modalità e i costi di consegna, ricordati di
          </Text>
        </VStack>
        <VStack pb="4">
          <HStack w="100%" justifyContent="space-between" alignItems="center">
            <Text fontSize="md" color="font.100">
              Subtotal{" "}
            </Text>
            <Text>€ 47,00</Text>
          </HStack>
          <HStack
            my="5"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="md" color="font.100">
              Courier Shipping{" "}
            </Text>
            <HStack alignItems="center">
              <Text>€ 2</Text>
              <Image
                alt="23rd"
                ml="2"
                source={require("../assets/Icons/ArrDown.png")}
              />
            </HStack>
          </HStack>

          <HStack w="100%" justifyContent="space-between" alignItems="center">
            <Text color="font.100" fontSize="md" fontWeight="600">
              Total{" "}
            </Text>
            <Text>€ 49</Text>
          </HStack>
          <Button
            mt='2'
            h="80px"
            mb='2'
            bg={
              params?.data?.status === "Shipped"
                ? "#6979F8"
                : params?.data?.status === "New"
                ? "btn.500"
                : params?.data?.status === "Cancelled"
                ? "btn.900"
                : "#FFA26B"
            }
          >
            {params?.data?.status}
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Order;
