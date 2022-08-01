import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  //Hooks
  const navigate = useNavigate();

  // state handlers
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});

  //submitHandler
  const handleSubmit = (e) => {
    e.preventDefault();
    //validating for userDetails in session storage
    userData?.username === username &&
      userData?.password === password
      ? [sessionStorage.setItem('username', username), alert('sucess!'), navigate('/dasboard')]
      : alert('Incorrect details');
  };
  // useEffect
  useEffect(() => {
    const registerData = sessionStorage.getItem('user');
    const userInfo = JSON.parse(registerData);
    setUserData(userInfo);
  }, [])

  return (
    <Flex height={'100vh'} justifyContent={'center'} flexDirection={'column'} bgColor={'white'}
      pt={'50px'} gap={5} alignItems={'center'} as={'form'} onSubmit={handleSubmit} >

      {/* Heading */}
      <FormControl width={'50%'}>
        <Heading color={'#385898'} >Login to your account</Heading>
        <h2>Securely login to your Komeno Data account</h2>
      </FormControl>

      {/* input fields */}
      <FormControl width={'50%'}>
        <FormLabel>Username</FormLabel>
        <Input type={'text'} placeholder={'Enter Username'}
          value={username} onChange={(e) => { setUsername(e.target.value) }} />
      </FormControl>

      <Flex width={'50%'} gap={2}>
        <FormControl width={'86%'}>
          <FormLabel>Password</FormLabel>
          <Input type={show ? 'text' : 'password'} placeholder={'Enter Username'}
            value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </FormControl>
        <FormControl width={'12%'}>
          <FormLabel> </FormLabel>
          <Button mt={'25px'} type={'button'} onClick={() => setShow((prev) => !prev)}>Show </Button>
        </FormControl>
      </Flex>

      <FormControl width={'50%'}>
        <Button type={'submit'} colorScheme={'facebook'} width={'100%'} >
          Login
        </Button>
      </FormControl>
      <FormControl width={'50%'}>
        <NavLink to={'/'}  >
          <h2>Dont have an account? Register</h2>
        </NavLink>
      </FormControl>

    </Flex>

  )
}

export default Login;