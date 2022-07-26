import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <GradientLayout
      color='red'
      subtitle='profile'
      title='Kapil'
      description='15 public playlists'
      image='kapil.jpeg'
      roundImage
    >
      <div>Home page</div>
    </GradientLayout>
  )
}

export default Home
