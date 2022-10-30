import React, {useEffect} from 'react';
import { Box, Flex, Center, Image, Text, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { IBook } from './Books';
import { removeFromBasket } from '../store/basket/slice';

const Basket = () => {
    const selectedBooks = useSelector((state: RootState) => state.basket)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(selectedBooks);
    }, [selectedBooks]);
    return <Box>
        <Center fontSize={"56px"}>
            Basket Page
        </Center>
        <Flex gap={"35px"}>
            {
                selectedBooks.map((sbook: IBook) => {
                    return <Box
                        key={sbook.id}
                        minW={"250px"}
                        maxW={"300px"}
                    >
                        <Flex justifyContent={"center"}>
                        <Image 
                            src={sbook.volumeInfo.imageLinks?.thumbnail}
                            width={"150px"}
                            objectFit={"contain"}
                        />
                    </Flex>
                    <Box>
                        <Text fontWeight={"bold"}>{sbook.volumeInfo.title}</Text>
                        <Text 
                            fontSize={"14px"} 
                            maxH="200px" 
                            overflowY={"scroll"} 
                            textOverflow={"ellipsis"}
                        >
                            {sbook.volumeInfo.description}
                        </Text>
                        <Text>{sbook.volumeInfo.authors?.map((author) => author).join(' ')}</Text>
                    </Box>
                    <Button onClick={() => dispatch(removeFromBasket(sbook))}>Remove</Button>
                    </Box>
                })
            }
        </Flex>
    </Box>
}

export default Basket;