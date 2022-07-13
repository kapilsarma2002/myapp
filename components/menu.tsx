import {
  List,
	ListItem,
	ListIcon,
	LinkBox,
	LinkOverlay
} from '@chakra-ui/layout';
import NextLink from 'next/link'

const Menu = ({menu}) => {
  return (
    <List spacing={2}>
      {menu.map(menuItem => {
        return (
          <ListItem paddingX='20px' fontSize='18px' key={menuItem.name}>
            <LinkBox>
              <NextLink href={menuItem.route} passHref>
                <LinkOverlay>
                  <ListIcon as={menuItem.icon} color='white' marginRight='20px' />
                  {menuItem.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Menu