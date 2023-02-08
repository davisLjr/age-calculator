import Age from '@/components/age'
import Calculator from '@/components/calculator'
import { Box } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function WhatsAge() {
  return (
    <Box  height='100vh' display='flex' alignItems='center' background='light'>
      <Age/>
    </Box>
  )
}
