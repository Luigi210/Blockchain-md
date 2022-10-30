import React from 'react';
import { Center } from '@chakra-ui/react';
import { ConnectWallet } from "@thirdweb-dev/react";

const Login = () => {

    return <Center p={"0 120px"}>
        <ConnectWallet/>
    </Center>
}

export default Login;