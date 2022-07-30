import React, { useState } from 'react'
import { Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //Hooks
  const navigate = useNavigate();

  //initialValue
  const initialValue = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    age: 0,
    phone: '',
    email: '',
    gender: '',
    tick: false
  };

  // setting states
  const [userData, setUserData] = useState(initialValue);
  const [show, setShow] = useState(false);

  // handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData, [name]: type === 'checkbox'
        ? checked
        : value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //session storage
    const user = JSON.stringify(userData);
    sessionStorage.getItem('user') === null
      ? sessionStorage.setItem('user', user)
      : (sessionStorage.removeItem('user'))
      , sessionStorage.setItem('user', user);
    //navigate
    userData.username.length > 6 && userData.password.length > 6
      ? [alert('details ok!'), navigate('/login')]
      : alert('username and password too short!');


  };
  console.log(userData);

  return (
    <Flex justify={'center'}
      align={'center'} pt={'100px'} gap={5}
      flexDirection={'column'} as={'form'} onSubmit={handleSubmit} >

      {/* Heading */}
      <FormControl width={'50%'}>
        <Heading color={'#385898'}>Create a Secure Account</Heading>
        <h2>Welcome to the world of cheap and reliable data services</h2>
      </FormControl>

      {/* First name */}
      <FormControl width={'50%'}>
        <FormLabel>First Name</FormLabel>
        <Input type={'text'} name={'firstname'} placeholder={'Enter First Name'} value={userData.firstname} onChange={handleChange} />
      </FormControl>

      {/* Last name */}
      <FormControl width={'50%'}>
        <FormLabel>Last Name</FormLabel>
        <Input type={'text'} name={'lastname'} placeholder={'Enter Last Name'} value={userData.lastname} onChange={handleChange} />
      </FormControl>

      {/* Username */}
      <FormControl width={'50%'}>
        <FormLabel>Username</FormLabel>
        <Input type={'text'} name={'username'} placeholder={'Enter Username'} value={userData.username} onChange={handleChange} />
      </FormControl>

      {/* Password */}
      <Flex width={'50%'} gap={2}>
        <FormControl width={'86%'}>
          <FormLabel>Password</FormLabel>
          <Input type={show ? 'text' : 'password'} name={'password'} placeholder={'Enter Password'} value={userData.password} onChange={handleChange} />
        </FormControl>
        <FormControl width={'12%'}>
          <FormLabel> </FormLabel>
          <Button mt={'25px'} type={'button'} onClick={() => setShow((prev) => !prev)}>Show </Button>
        </FormControl>
      </Flex>


      {/* Age and Gender */}
      <Flex width={'50%'} gap={5} >
        <FormControl width={'49%'}>
          <FormLabel>Age</FormLabel>
          <Input type={'text'} name={'age'} placeholder={'Enter Age'} value={userData.age} onChange={handleChange} />
        </FormControl>
        <FormControl width={'49%'}>
          <FormLabel>Gender</FormLabel>
          <Select name={'gender'} id={'gender'} value={userData.gender} onChange={handleChange} >
            <option value=" ">Choose a gender</option>
            <option value="Male"> Male </option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </Select>
        </FormControl>
      </Flex>
      {/* Phone */}
      <FormControl width={'50%'}>
        <FormLabel>Phone</FormLabel>
        <Input type={'text'} name={'phone'} placeholder={'Enter Phone Number'} value={userData.phone} onChange={handleChange} />
      </FormControl>

      {/* Email */}
      <FormControl width={'50%'}>
        <FormLabel>Email</FormLabel>
        <Input type={'email'} name={'email'} placeholder={'Enter Email address'} value={userData.email} onChange={handleChange} />
      </FormControl>

      {/* Tick */}
      <FormControl width={'50%'}>
        <Checkbox type={'checkbox'} name={'tick'} checked={userData.tick} onChange={handleChange} >
          Agree to terms and conditions
        </Checkbox>
      </FormControl>

      {/* Submit */}
      <FormControl width={'50%'}>
        <Button width={'100%'} colorScheme={'facebook'} type={'submit'} onChange={handleChange}>Register</Button>
      </FormControl>

    </Flex>
  )
}

export default Register;