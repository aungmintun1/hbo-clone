import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/UI/Login/Login';
import {useEffect} from 'react';
import { useRouter } from 'next/router'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
import AuthCheck from '../components/authCheck'
import MediaRow from "../components/UI/MediaRow/MediaRow";

export default function Home() {

  const globalState = useStateContext();

  const router = useRouter()

  // useEffect(() => {
  // const loggedIn = false;
  // if(loggedIn === false) {
  // router.push('/create')
  // }
  // }, [])
 
  return AuthCheck(
    <MainLayout>
    <FeaturedMedia />
    <MediaRow title="Movies" type="large-v" />
    {/* <FeaturedMedia />
    <ForYouList />
    <JustAdded />
    <PosterView /> */}
  </MainLayout>
 
  )
}
