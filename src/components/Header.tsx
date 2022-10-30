import React, {useState, useEffect} from 'react';
import { Box, Flex, Center } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'


const Header = () => {
    
    const navigate = useNavigate();

    return <Center
        p={"0 120px"}
        bgColor={"#132D46"}
        minH={"50px"}
    >
        <Flex 
            justifyContent={'space-between'}
            w={"full"}
        >
            <Link 
                onClick={() => navigate('/login')}
                color={"#fff"}
            >
                Login
            </Link>
            <Link 
                onClick={() => navigate('/category')}
                color={"#fff"}
            >
                Category
            </Link>
            <Link 
                onClick={() => navigate('/search-books')}
                color={"#fff"}
            >
                Search
            </Link>
            <Link 
                onClick={() => navigate('/basket')}
                color={"#fff"}
            >
                in Basket
            </Link>
            
        </Flex>
    </Center>
};

export default Header;