import { Button, Flex, Heading } from "@chakra-ui/react";
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
    <Flex justify={"center"} flexDirection={'column'} align={'center'} height={'100vh'}>
      <Heading pt={'40px'} >Welcome to your dashboard {user.firstname} {user.lastname} </Heading>
      <Flex justify={"center"} flexDirection={'column'} align={'center'} height={'100vh'}>

        {/* userdetails shown */}

        <h1>
          Below are the details used in your registration. Make sure you keep these in a safe place
        </h1>
        <p> Your first name is {user.firstname} </p>
        <p> Your last name is {user.lastname} </p>
        <p> Your username name is {user.firstname} </p>
        <p> Your password name is {user.password} </p>
        <p> you are {user.age} years old </p>
        <p> Your phone number is {user.phone} </p>
        <p> Your Email adress is {user.email} </p>
        <p> You are a {user.gender} </p>

        <Button colorScheme={'red'} onClick={() => {
          sessionStorage.removeItem('username');
          navigate('/login');
        }} >
          Logout
        </Button>
      </Flex >
    </Flex>
  );
};

export default Dashboard;
