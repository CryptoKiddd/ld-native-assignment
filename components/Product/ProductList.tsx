import { Image, VStack, HStack, Text, Box } from "native-base";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <VStack bg="background.900" w="326" rounded="md" shadow="2">
      <HStack
        borderBottomWidth={1}
        borderColor="btn.800"
        h="50"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          pl="1"
          h="100%"
          borderColor="btn.800"
          w="50%"
          justifyContent="center"
        >
          <Text fontWeight="700" color="font.200" fontSize="md">
            Product Name
          </Text>
        </Box>
        <Box w="30%" h="100%" justifyContent="center">
          <Text fontWeight="700" color="font.200" fontSize="md">
            Price
          </Text>
        </Box>
        <Box h="100%" w="15%" justifyContent="center" alignItems="center">
          <Text fontWeight="700" color="font.200" fontSize="xl">
            {" "}
            ...
          </Text>
        </Box>
      </HStack>
      {products?.map((row, idx) => {
        return (
          <HStack
            borderBottomWidth={1}
            borderColor="btn.800"
            key={idx}
            h="50"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="50%"
              h="100%"
              flexDirection="row"
              borderRightWidth={1}
              alignItems="center"
              borderColor="btn.800"
            >
              <Image
                alt="image"
                source={require("../../assets/Images/productImage.png")}
              />
              <Text ml="2.5">{row.name}</Text>
            </Box>

            <Box
              borderRightWidth={1}
              borderColor="btn.800"
              justifyContent="center"
              pl="2.5"
              h="100%"
              w="30%"
            >
              <Text>{row.price}</Text>
            </Box>
            <Box w="15%" justifyContent="center" alignItems="center">
              <Text fontWeight="700" color="font.200" fontSize="xl">
                {" "}
                ...
              </Text>
            </Box>
          </HStack>
        );
      })}
      <HStack h="50px" w="100%">
        <HStack w="50%" alignItems="center" justifyContent="center" space={2}>
          <Text fontSize="xs" color="font.100">
            P 25
          </Text>
          <Image alt="sec" source={require("../../assets/Icons/ArrDown.png")} />
        </HStack>
        <HStack w="30%" alignItems="center" justifyContent="center">
          <Text fontSize="xs" color="font.100">
            {" "}
            1-25 of 25
          </Text>
        </HStack>
        <HStack pl="3" alignItems="center" justifyContent="center" space={2}>
          <Image
            w="20px"
            resizeMode="contain"
            alt="fev"
            source={require("../../assets/Icons/productLeft.png")}
          />
          <Image
            w="20px"
            resizeMode="contain"
            alt="fev"
            source={require("../../assets/Icons/productRight.png")}
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default ProductList;
