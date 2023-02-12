import Calculator from '@/components/Calculator'
import { Layout } from '@/components/Layout'
import { Box } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout hideHeader={false} titles={'Birthday calculator'}>
      <Box  height='100vh' display='flex' alignItems='center'>
        <Calculator onClick={function (birthYear: number): void {
          throw new Error('Function not implemented.')
        } }/>
      </Box>
    </Layout>
  )
}
