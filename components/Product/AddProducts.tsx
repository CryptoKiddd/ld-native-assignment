
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Checkbox,
  Text,
  Box,
  HStack,
  Input,
  VStack,
  TextArea,
  Image,
  ScrollView,
  Select,
  CheckIcon,
  Radio,
  View,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerParamList, OrderParamList } from "../../types/types";

const AddProducts = () => {
  const [checked, setChecked] = useState(false);
  const [checkedFeatured, setCheckedFeatured] = useState(false);
  const [service, setService] = useState("");
  const [type, setType] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<DrawerParamList>>()
  return (
    <ScrollView w="100%" px="4">
      <TouchableOpacity onPress={()=>navigation.navigate("Products")} >
      <HStack shadow='3' rounded='full' mt='3' alignItems='center' space={2}  justifyContent='center' px='2' py='2' bg='background.900' borderWidth='1' borderColor='btn.500' w='140px'>
        <Image source={require("../../assets/Icons/leftArr.png")} alt='' />
        <Text>All Products</Text>
      </HStack>
      </TouchableOpacity>

      <Text color="font.200" fontSize="xl" fontWeight="600" my="6">
        New Product
      </Text>
      <HStack w="274">
        <Text
          color="btn.500"
          borderBottomWidth="2.5"
          borderColor="btn.500"
          p="2.5"
          textAlign="center"
          w="50%"
        >
          info
        </Text>
        <Text p="2.5" textAlign="center" w="50%">
          variants
        </Text>
      </HStack>
      <Box py="6" w="100%">
        <VStack
          bg="background.900"
          p="6"
          shadow="2"
          rounded="md"
          w="326"
          h="465"
          mb="6"
        >
          <Text color="font.200" fontSize="xl" fontWeight="600" my="6" w="100%">
            General Inforamtion
          </Text>
          <Text color="font.100" fontSize="md" fontWeight="600" mb="2" w="100%">
            Product name
          </Text>
          <Input h="10" placeholder="lorem ipsum" w="100%" type="text" />
          <VStack mt="4">
            <Text
              color="font.100"
              fontSize="md"
              fontWeight="600"
              mb="2"
              w="100%"
            >
              Description
            </Text>

            <HStack
              rounded="md"
              mb="-1.5"
              alignItems="center"
              p="4"
              w="100%"
              justifyContent="space-between"
              borderBottomWidth="0"
              borderWidth="1"
              borderColor="#0A254052"
            >
              <Image
                alt="icon"
                source={require("../../assets/Icons/newBold.png")}
              />
              <Image
                alt="icon"
                source={require("../../assets/Icons/newItalic.png")}
              />
              <Image
                alt="icon"
                source={require("../../assets/Icons/newText.png")}
              />
              <Image
                alt="icon"
                source={require("../../assets/Icons/newUnderline.png")}
              />
              <Image
                alt="icon"
                source={require("../../assets/Icons/newList.png")}
              />
              <Image
                alt="icon"
                source={require("../../assets/Icons/newLink.png")}
              />
            </HStack>

            <TextArea
              autoCompleteType="tr"
              placeholder="Description (0 / 5000)"
              w="100%"
              h={150}
              type="text"
            />
          </VStack>
        </VStack>
        <VStack
          bg="background.900"
          p="6"
          shadow="2"
          rounded="md"
          w="326"
          h="333"
          mb="6"
        >
          <Text color="font.200" fontSize="xl" fontWeight="600">
            Price
          </Text>
          <Text mt="6" mb="2" color="font.100" fontSize="md" fontWeight="600">
            Original price
          </Text>
          <Input type="text" placeholder="€ 0" />
          <Text mt="6" mb="2" color="font.100" fontSize="md" fontWeight="600">
            Discounted price
          </Text>
          <Input
            isDisabled={!checked}
            _disabled={{ bg: "#E7E9EC" }}
            type="text"
            placeholder="€ Lorem Ipsum"
          />
          <Checkbox
            mt="6"
            value=""
            onChange={() => setChecked((prev) => !prev)}
            isChecked={checked}
            colorScheme="blue"
          >
            Activate discounted price
          </Checkbox>
        </VStack>
        <VStack
          bg="background.900"
          p="6"
          shadow="2"
          rounded="md"
          w="326"
          h="509"
        >
          <Text color="font.200" fontSize="xl" fontWeight="600">
            Details
          </Text>
          <Text mt="4" mb="2" color="font.100" fontSize="sm" fontWeight="600">
            Category
          </Text>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Select category"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="xs" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Text mt="4" mb="2" color="font.100" fontSize="sm" fontWeight="600">
            Product code / SKU
          </Text>
          <Input
            type="text"
            mb="4"
            placeholder="Leave empty to automatically generate"
          />
          <Text mt="6" mb="2" color="font.100" fontSize="sm" fontWeight="600">
            Weight
          </Text>
          <Input type="text" placeholder="0 g" />
          <Text mt="4" mb="2" color="font.100" fontSize="sm" fontWeight="600">
            Availability
          </Text>
          <Input type="text" placeholder="0" />
          <Checkbox
            mt="6"
            value=""
            onChange={() => setCheckedFeatured((prev) => !prev)}
            isChecked={checkedFeatured}
            colorScheme="blue"
          >
            This is a featured product
          </Checkbox>
        </VStack>
        <VStack
          bg="background.900"
          p="4"
          mt='4'
          pt='1'
          shadow="2"
          rounded="md"
          w="326"
          h="120"
          space={2}
        >
          <Text color="font.200" fontSize="xl" fontWeight="600" mt="6" w="100%">
            Product Type
          </Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={type}
            onChange={(nextValue) => {
              setType(nextValue);
            }}
          >
            <HStack>

            <Radio value="one" my={1} >
              <Text>Physical</Text>
            </Radio>
            <Radio ml='4' value="two"  my={1}>
              <Text>Digital</Text>
            </Radio>
            </HStack>
          </Radio.Group>
          
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default AddProducts;
