import { Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Flex justifyContent={"space-between"} px={"10px"} alignItems={"center"}>
      <NavLink to={"/"}>
        <Heading color={"#385898"}>Komeno Data</Heading>
      </NavLink>
      <HStack fontSize={"20px"} gap={5}>
        <NavLink
          to={"/"}
          style={({ isActive }) =>
            isActive ? { color: "#385898", fontSize: "1.5em" } : { color: "black" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/login"}
          style={({ isActive }) =>
            isActive ? { color: "#385898", fontSize: "1.5em" } : { color: "black" }
          }
        >
          Login
        </NavLink>
      </HStack>
    </Flex>
  );
};

export default Nav;
