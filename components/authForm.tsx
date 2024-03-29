import { Box, Flex, Input, Button, calc } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSWRConfig } from 'swr'
import { auth } from '../lib/mutations'
import NextImage from 'next/image'
import Link from 'next/link'

const authForm = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const type : string = (mode === 'signin') ? 'Sign In' : 'Sign Up'
  const isSignin : boolean = (mode === 'signin') ? true : false

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/')
  }

  return (
    <Box height='100vh' width='100vw' bg='black' color='white'>
      <Flex padding='20px' justifyContent='center' alignItems='center' height='200px'>
        <NextImage src='/logo.svg' height={90} width={180} />
      </Flex>
      <Flex justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
        <Box padding='50px' bg='gray.900' borderRadius='20px'>
          <form onSubmit={handleSubmit}>
            <Flex 
              justifyContent='center'
              alignItems='center'
              height='50px'
              fontSize='40px'
              marginBottom='40px'
            > 
              {type}

            </Flex>
            <Input 
              placeholder='Email' 
              type='email'
              margin='10px 0 10px 0'
              borderRadius='10px'
              borderColor='gray.500'
              onChange={(e) => setEmail(e.target.value)}
             />
            
            <Input 
              placeholder='Password' 
              type='password'
              borderRadius='10px'
              borderColor='gray.500'
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <Button 
              type='submit' 
              bg='gray.800' 
              marginTop='20px' 
              marginLeft='40%' 
              marginBottom='20px'
              isLoading={isLoading} 
              justifyContent='center'
              rightIcon={<ArrowForwardIcon />}
              sx={{
                '&:hover': {
                  color: 'black'
                }
              }}
            >
              {mode}
            </Button>
            
            <Box
              color='gray.500'
              justifyContent='center'
              alignItems='center'
              sx={{
                '&:hover' : {
                  color : 'white'
                }
              }}
            >
              {
                (isSignin) ? (
                  <Link href="/signup">
                    <a>Don't have an account? Click Here to Sign up!</a>
                  </Link>
                ) : (
                  <Link href="/signin">
                    <a>Already have an account? Click Here to Log in!</a>
                  </Link>
                )
              } 
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default authForm