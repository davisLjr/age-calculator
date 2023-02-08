import Age from '@/components/age'
import Calculator from '@/components/calculator'
import { Box } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box  height='100vh' display='flex' alignItems='center' background='light'>
      <Calculator onClick={function (birthYear: number): void {
        throw new Error('Function not implemented.')
      } }/>
    </Box>
  )
}
