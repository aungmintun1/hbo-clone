import Head from 'next/head'
import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
import MediaRow from "../components/UI/MediaRow/MediaRow";

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="More Like This" type="small-v" endpoint="discover/movie?with_genres=878&primary_release_year=2021" />
      <CastInfo />
    </MainLayout>
  )
}
