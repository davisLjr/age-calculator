import { Box, Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Age: React.FC = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const birthdate = new Date(`${month}/${day}/${year}`);
    const ageInMilliseconds = Date.now() - birthdate.getTime();
    const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
    setAge(Math.floor(ageInYears));
  };

  return (
    <Box className="calculator" maxW='600px' margin='auto' textAlign='center' boxShadow='md' padding='2.5rem 2rem'>
      <Heading size='lg'>Age Calculator</Heading>
      <Flex className="input-section" justifyContent='space-between' marginTop='2rem' flexWrap='wrap' >
        <label>Año de nacimiento:</label>
        <Input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          minWidth={{sm:'100%', lg:'50%'}}
          variant='flushed'
        />
      </Flex>
      <Flex className="input-section" justifyContent='space-between' flexWrap='wrap' margin='0.5rem 0rem'>
        <label>Mes de nacimiento:</label>
        <Input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          minWidth={{sm:'100%', lg:'50%'}}
          variant='flushed'
        />
      </Flex>
      <Flex className="input-section" justifyContent='space-between' flexWrap='wrap' >
        <label>Día de nacimiento:</label>
        <Input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          minWidth={{sm:'100%', lg:'50%'}}
          variant='flushed'
        />
      </Flex>
      <Button onClick={calculateAge} variant='outline' colorScheme='blue' marginTop='1rem' width='100%'
        _hover={{
          background: 'secondary.900',
          color:'white'
        }}
      >
        Calculate
      </Button>
      <Text className="result" mt='1rem' h='1.5rem'>
        {age === 0 ? "" : `Tu edad es: ${age} Años`}
      </Text>
    </Box>
  );
};

export default Age;

