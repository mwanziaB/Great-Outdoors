import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { Heading, Text, Box,AbsoluteCenter, Container, VStack, SimpleGrid, Center, Button, AspectRatio, Alert, AlertIcon, useToast } from '@chakra-ui/react'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';

import Navbar from '../components/navbar'
import NextLink from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Yujo Izakaya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Box bg={'red.600'} minH={'100vh'}>

        <Box>
          <Navbar />
        </Box>


        <AbsoluteCenter mt={{base: -10, md: 0}}>
          <NextLink href='/about'>
            <Image
              src={getCloudinaryImage('yujo9.svg')} 
              alt="Yujo Brand Logo"
              width={300}
              height= {300}
              priority
              placeholder="blur"
              
              blurDataURL={getCloudinaryImageBlur('yujo9.svg')}
              />
            </NextLink>
        </AbsoluteCenter>
        
      </Box>

    </Box>
  )
}
