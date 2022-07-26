import Head from 'next/head'
import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'
import styles from '../styles/Home.module.css'
import {Box, Text, Flex} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const Home = ({artists}) => {
  // console.log(artists)
  return (
    <GradientLayout
      color='purple'
      subtitle='profile'
      title='Kapil Sarma'
      description='15 public playlists'
      image='kapil.jpeg'
      roundImage
    >
      <Box color='white' paddingX='40px'>
        <Box marginBottom='40px'>
          <Text fontSize='2xl' fontWeight='bold'>Top artists this month</Text>
          <Text fontSize='medium'>Only visible to you</Text>
        </Box>
        <Flex>
          {
            artists.map((artist) => (
              <Box paddingX='10px' width='20%'>
                <Box bg='gray.900' borderRadius='8px' padding='15px' width='100%'>
                  <Image
                    src='https://2.bp.blogspot.com/_zF_VEO13V7k/TRHLbctPQFI/AAAAAAAABMs/YV8RhPb9UuA/s1600/little_krishna.jpg'
                    borderRadius='100%'
                  />
                  <Box marginTop='20px'>
                    <Text fontSize='large'>{artist.name}</Text>
                    <Text fontSize='x-small'>Artist</Text>
                  </Box>
                </Box>
              </Box>
            ))
          }
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: {artists}
  }
}

export default Home
