import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'

interface Props {
  onClick: (birthYear: number) => void;
}

const Calculadora: React.FC<Props> = () => {
  const [currentAge, setCurrentAge] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);
  const [yearOfBirth, setYearOfBirth] = useState(0);

  const calculateYearOfBirth = (currentAge: number, currentMonth: number, currentDay: number) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonthZeroIndexed = currentDate.getMonth() + 1;
    const currentDayOfMonth = currentDate.getDate();
  
    if (currentMonth <= 0 || currentMonth > 12) {
      // Mensaje de error o alerta para indicar que el mes es inválido
      return;
    }
    
    if (currentDay <= 0 || currentDay > 31) {
      // Mensaje de error o alerta para indicar que el día es inválido
      return;
    }
  
    let yearOfBirth = currentYear - currentAge;
    if (currentMonth > currentMonthZeroIndexed || (currentMonth === currentMonthZeroIndexed && currentDay > currentDayOfMonth)) {
      yearOfBirth -= 1;
    }
    setYearOfBirth(yearOfBirth);
  };

  return (
    <Box className="calculadora" maxW='600px' margin='auto' textAlign='center' boxShadow='md' padding={{base:'2.5rem 1rem', md:'2.5rem 2rem'}} minWidth={{base:'95%', md:'auto'}}>
      <Heading size='lg'>Calculadora de año de nacimiento</Heading>
      <Flex justifyContent='space-between' marginTop='2rem' flexWrap='wrap' >
        <label htmlFor="age" className='label'>Edad actual:</label>
        <Input  
          type="number"
          id="age"
          value={currentAge}
          onChange={(e) => setCurrentAge(parseInt(e.target.value))}
          minWidth={{sm:'100%', lg:'50%'}}
          variant='flushed'
        />
      </Flex>
      <Flex justifyContent='space-between' flexWrap='wrap' margin='0.5rem 0rem' >
        <label htmlFor="month">Mes de nacimiento:</label>
        <Input  
          type="number"
          id="month"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
          minWidth={{sm:'100%', lg:'50%'}}
          variant='flushed'
        />
      </Flex>
      <Flex justifyContent='space-between' flexWrap='wrap' >
        <label htmlFor="day">Día de nacimiento:</label>
        <Input  
          type="number"
          id="day"
          value={currentDay}
          onChange={(e) => setCurrentDay(parseInt(e.target.value))}
          minWidth={{sm:'100%', lg:'50%'}}
          variant='flushed'
        />
      </Flex>
      <Button onClick={() => calculateYearOfBirth(currentAge, currentMonth, currentDay)} variant='outline' marginTop='1rem' width='100%'
        _hover={{
          background: 'secondary.900',
          color:'white'
        }}
      >
        Calcular año de nacimiento
      </Button>
      <Text mt='1rem' h='1.5rem'>
        {yearOfBirth > 0 ? <p>Año de nacimiento: {yearOfBirth}</p> : null}
      </Text>
    </Box>
  );
};

export default Calculadora;
