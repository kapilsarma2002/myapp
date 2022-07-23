import {
  Box,
  Flex,
  Text
} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage
}) => {
  return (
    <Box height='100vh' overflowY='auto' bgGradient={`linear(${color}.500 0)`}>

    </Box>
  )
}

export default GradientLayout