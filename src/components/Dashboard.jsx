import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const registererdData = sessionStorage.getItem('user');
    const userdetails = JSON.parse(registererdData);
    setUser(userdetails);
  }, [])

  return (
    <VStack align={'center'}
      borderRadius={'50'} bgColor={"antiquewhite"}
      width={''} height={'100vh'}>
      <Heading pt={'40px'}  >
        Welcome to your dashboard {user.firstname} {user.lastname} !
      </Heading>

      <Flex pt={'0px'} justify={"center"}
        flexDirection={'column'}
        align={'center'} >

        {/* userdetails shown */}

        <Text fontWeight={"semibold"} fontSize={'1.5em'} lineHeight={'1em'} color={'green'}>
          Below are the details used in your registration.<br /> Make sure you keep these in a safe place
        </Text>
        <Text fontSize={'1.5em'} fontFamily={'cursive'} > Your first name is {user.firstname} </Text>
        <Text fontSize={'1.5em'} fontFamily={'cursive'} > Your last name is {user.lastname} </Text>
        <Text fontSize={'1.5em'} fontFamily={'cursive'} > Your username name is {user.firstname} </Text>
        <Text fontSize={'1.5em'} fontFamily={'cursive'} > Your password name is {user.password} </Text>
        <Text fontSize={'1.5em'} fontFamily={'cursive'} > you are {user.age} years old </Text>
        <Text fontSize={'1.5em'} fontFamily={'cursive'} > Your phone number is {user.phone} </Text>
        <Text fontSize={'1.5em'} fontFamily={'cursive'} > Your Email adress is {user.email} </Text>

        <Button colorScheme={'red'}
          onClick={() => {
            sessionStorage.removeItem('username');
            navigate('/login');
          }} >
          Logout
        </Button>

      </Flex >

    </VStack>
  );
};

export default Dashboard;
