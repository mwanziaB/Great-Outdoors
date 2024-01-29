import { Heading, Flex,Stack, StackDivider, HStack, Text, Box,AbsoluteCenter, Container, VStack, SimpleGrid, Center, Button, AspectRatio, Alert, AlertIcon, useToast, useColorModeValue } from '@chakra-ui/react'
// import NextImage from 'next/image'

import Navbar from '../components/navbar'
import Image from 'next/image'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';
import Head from 'next/head'
import NextLink from 'next/link'






export default function Order() {
    return (
        <Box bgColor={'red.600'} height={'99vh'}>

            <Head>
                <title>Yujo Izakaya</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box>
                <Navbar />
            </Box>

            <Container >
                <Center>


                <VStack 
                //   divider={<StackDivider borderColor='gray.200' />}
                  spacing={8}
                  align='center'
                  mt={{base:12}}
                
                >
                    <Box>
                        <Heading
                        as='h1'
                        size='4xl'
                        color="white"
                        fontFamily={'headingFont'}
                        textAlign="center"
                        mb={12}
                        >
                        Order
                        </Heading>
                    </Box>


                    <Flex minH={'20vh'}>
                        <NextLink href='https://glovoapp.com/ug/en/kampala/yujo-izakaya-kpa/'>
                            <Image
                            // src={getCloudinaryImage('yujo9.svg')} 
                            src={getCloudinaryImage('glovo.png')} 
                            alt="Yujo Brand Logo"
                            width={300}
                            height= {300}
                            priority
                            placeholder="blur"
                            blurDataURL={getCloudinaryImageBlur('yujo9.svg')}
                            />
                        </NextLink>
                    </Flex>

                    <Flex minH={'20vh'}>
                        <NextLink href='https://eats.biz/yujo'>
                                <Image
                                // src={getCloudinaryImage('yujo9.svg')} 
                                src={getCloudinaryImage('eatsBiz.jpg')} 
                                alt="Yujo Brand Logo"
                                width={300}
                                height= {300}
                                priority
                                placeholder="blur"
                                blurDataURL={getCloudinaryImageBlur('yujo9.svg')}
                                
                                />
                        </NextLink>
                    </Flex>
                </VStack>
                </Center>
                
                


            </Container>
        </Box>
  
    )
}


