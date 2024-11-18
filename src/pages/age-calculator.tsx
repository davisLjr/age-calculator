import Age from '@/components/age'
import { Layout } from '@/components/Layout'
import { Box } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function WhatsAge() {
  return (
    <>
      <Head>
        <meta name="description" content="Agradecimiento a Neitrys Barrera, con su ayuda puedo desarrollar paginas web." />
        <meta property="og:title" content="Neitrys Barrera - Practicas de programación" />
        <meta property="og:description" content="Esto es una practica de desarrollo guiada por Neitrys Barrera." />
      </Head>
      <Layout hideHeader={false} hideFooter={false} titles={'Age calculator'}>
        <Box  height='100vh' display='flex' alignItems='center'>
          <Age/>
        </Box>
      </Layout>
    </>
  )
}
