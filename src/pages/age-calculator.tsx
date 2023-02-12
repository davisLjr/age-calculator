import Age from '@/components/Age'
import { Layout } from '@/components/Layout'
import { Box } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function WhatsAge() {
  return (
    <Layout hideHeader={false} hideFooter={false} titles={'Age calculator'}>
      <Box  height='100vh' display='flex' alignItems='center'>
        <Age/>
      </Box>
    </Layout>
  )
}
