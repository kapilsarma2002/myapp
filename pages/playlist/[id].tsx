import GradientLayout from "../../components/gradientLayout"
import { validateToken } from "../../lib/auth"
import prisma from "../../lib/prisma"
import SongsTable from "../../components/songsTable"

const getDbColor = id => {
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'gray',
    'teal',
    'yellow'
  ]

  return colors[(id) % colors.length]
}

const Playlist = ({playlist}) => {

  const color = getDbColor(playlist.id)

  return (
    <GradientLayout 
      color={color} 
      roundImage={false} 
      subtitle='playlist' 
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
      >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  )
}

export const getServerSideProps = async ({ query, req }) => {
  let user

  try{
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN)
  } catch(e) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin',
      }
    }
  }
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id
    },
    include: {
      songs:{
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            }
          }
        }
      }
    }
  })

  return {
    props: {playlist}
  }
}

export default Playlist