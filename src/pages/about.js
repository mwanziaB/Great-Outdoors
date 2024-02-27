import { Heading, Flex,Stack, HStack, Text, Box,AbsoluteCenter, Container, VStack, SimpleGrid, Center, Button, AspectRatio, Alert, AlertIcon, useToast, useColorModeValue } from '@chakra-ui/react'
// import NextImage from 'next/image'

import Navbar from '../components/navbar'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';
import Image from 'next/image'

import fish from '../../public/backgrounds/fishBoyz.png'
import Head from 'next/head'
import SideBar from '../components/sidebar'




            {/* //full page image: https://stackoverflow.com/questions/65169431/how-to-set-the-next-image-component-to-100-height */}


export default function AboutUs() {
    return (
        // <Box bgColor={'red.600'} height={'100vh'}>
        //     <Navbar />
        //     <Box bgImage={{src=getCloudinaryImage('fishBoyz.png')} }>
        //         <Image
        //         src={getCloudinaryImage('fishBoyz.png')} 
        //         alt="Yujo Brand Logo"
        //         width={0}
        //         height= {0}
        //         sizes='100vw'
        //         style={{ width: '100%', height:'auto'}}
        //         priority
        //         placeholder="blur"
                
        //         blurDataURL={getCloudinaryImageBlur('fishBoyz')}
        //         />
        //     </Box>
        //     <Heading>
        //         About Us
        //     </Heading>
        // </Box>

        <Box bgColor={'blackAlpha.900'} >
            <Head>
                <title>About Us | Yujo Izakaya</title>
                <meta name="description" content="About Yujo Izakaya" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Box 
                minHeight='100vh'
                // bgColor={'red.50'} 
                bgSize="cover" 
                bgPosition="center" 
                bgAttachment="fixed" 
                // backgroundImage={{base: '../../public/backgrounds/fishBoyz.png'}}
                backgroundImage={'../../../backgrounds/fishBoyz.png'}
            >
            <Box>
                <SideBar />
            </Box>

                <Center p={{sm:1 , md:10}} >
                    <Heading
                    as='h1'
                    size={{base:'3xl', lg:'4xl'}}
                    textAlign="center"
                    color="red.600"
                    pt={{base: 10, md: 64}}
                    pb={{base: 5}}
                    fontFamily={'headingFont'}
                    >
                    About Us
                    </Heading>
                </Center>
            </Box>



            <Box minHeight='85vh' pb={24}>
                <Center p={{sm:10 , md:10}} flex='1' mt={{base:32, md:64, lg: 32}} mb={{base:24}}>
                    <Heading
                    as='h2'
                    size='4xl'
                    color="red.600"
                    fontFamily={'headingFont'}
                    textAlign="center"

                     >
                    Safari Seafood
                    </Heading>
                    
                </Center>

                <Center px={{base:16 ,md:20, lg:64}} flex='1' >
                        <Box px={{md:24}}>
                            <Text 
                            fontFamily={'navBarFont'} 
                            fontSize={{base:'3xl',md:'4xl'}}
                            color={'whiteAlpha.800'}
                            textAlign='center'
                            pb={{base:6, md: 6}}
                            >
                            Laid-back vibes of California sunshine meet the vibrant rhythm of Ugandan flavors. 
                            </Text>
                            <Text 
                            fontFamily={'navBarFont'} 
                            fontSize={{base:'3xl',md:'4xl'}}
                            color={'whiteAlpha.800'}
                            textAlign='center'
                            >
                                We take traditional Japanese dishes and give them a West-Coast twist, using fresh, seasonal ingredients sourced from local markets and farms around Uganda. 
                            </Text>
                        </Box>
                </Center>
            
            </Box>

        </Box>

        




  
    )
}


