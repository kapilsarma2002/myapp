import NextImage from "next/image";
import NextLink from "next/link";
import { usePlaylist } from "../lib/hooks";
import {
	Box,
	List,
	ListItem,
	Divider,
	LinkOverlay
} from "@chakra-ui/layout";
import {
	MdHome,
	MdSearch,
	MdLibraryMusic,
	MdPlaylistAdd,
	MdFavorite
} from "react-icons/md";
import Menu from "./menu";

const navMenu = [
	{
		name : "Home",
		icon : MdHome,
		route : "/"
	},
	{
		name : "Search",
		icon : MdSearch,
		route : "/search"
	},
	{
		name : "Your Library",
		icon : MdLibraryMusic,
		route : "/library"
	}
];

const musicMenu = [
	{
		name : "Create Playlist",
		icon : MdPlaylistAdd,
		route : "/"
	},
	{
		name : "Favorites",
		icon : MdFavorite,
		route : "/favorites"
	}
];

// const playlists = new Array(50).fill(1).map((_,i) => `Playlist ${i+1}`)

const Sidebar = () => {
	
	const { playlists } = usePlaylist()
	
	return (
		<Box width="100%" height="calc(100vh - 100px)" paddingX = "5px" bg="black" color="gray">
			<Box paddingY="20px" height="100%">
				{/* logo */}
				<Box width="120px" marginBottom="20px" paddingX="20px">
					<NextImage src="/logo.svg" height={60} width={120} />
				</Box>
				{/* navigation menu  */}
				<Box marginBottom="20px">
					<Menu menu={navMenu}/>
				</Box>
				{/* music menu */}
				<Box marginTop="20px" marginBottom="20px">
					<Menu menu={musicMenu} />
				</Box>
				<Divider color="gray.800"/>
				{/* playlists */}
				<Box height="63%" paddingY="20px" overflow="auto">
					<List spacing={2}>
						{playlists.map((playlist) => {
							return (
								<ListItem paddingX="20px" key={playlist.id}>
									<NextLink href="/" passHref>
										<LinkOverlay>
											{playlist.name}
										</LinkOverlay>
									</NextLink>
								</ListItem>
							)
						})}
					</List>
				</Box>
			</Box>
		</Box>
	)
}

export default Sidebar;