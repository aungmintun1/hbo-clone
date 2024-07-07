import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../../../components/Layouts/MainLayout";
import FeaturedMedia from "../../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../../components/authCheck";
import LazyLoad from "react-lazyload";
import Placeholders from "../../../components/UI/Placeholders/Placeholders";
import GenreNav from "../../../components/UI/GenreNav/GenreNav";
import axios from 'axios';
import { shuffleArray } from "../../../components/UI/utilities";


export default function MediaTypePage(props) {
	const globalState = useStateContext();

  const showRandomMedia = () => {
    let thumbType;
    return props.genresData.map((item, index) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0]
      return(
        <div key={item.id}>
          <LazyLoad
          offset={-200}
          placeholder={<Placeholders title={item.name} type={thumbType}  />}>
          <MediaRow
            title={item.name}
            type={thumbType}
            endpoint={`discover/${props.query.mediaType}?with_genres=${props.query.genre_id}&sort_by=popularity.desc&primary_release_year=2024&page=${index + 1}`}
          />
        </LazyLoad>
      </div>
      )
    })
  }
  console.log('this is query ' + JSON.stringify(props.query));
  console.log('props index', `/${props.query.mediaType}/${props.featuredData.id}`)

	return AuthCheck(
		<MainLayout>
			<FeaturedMedia
				mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
				title={props.query.mediaType === 'movie' ? props.featuredData.title : props.featuredData.name}
				
				linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
				type="single"
				mediaType={props.query.mediaType}
				mediaId={props.featuredData.id}
			/>
      <GenreNav mediaType={props.query.mediaType} genresData={props.genresData} />

			{showRandomMedia()}

		</MainLayout>,
	);
}

export async function getServerSideProps(context) {
	let genresData;
	let featuredData;
	try {
		genresData = await axios.get(
			`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
		);
		featuredData = await axios.get(
			`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&with_genres=${context.query.genre_id}&api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
		);
		console.log("genresData");
		console.log(genresData.data);
	} catch (error) {
		console.log("error");
		console.log(error);
	}
	return {
		props: {
			genresData: genresData.data.genres,
			featuredData: shuffleArray(featuredData.data.results)[0],
			query: context.query,
		}, // will be passed to the page component as props
	};
}

//gets all movies or series that have genre type 

/* 
1. genresData stores all genre types eg [{id:28, name:'Action'}, {id:12, name:'Adventure'}, ]
2. featuredData stores one random movie/tv from the request that query's for the genre type 
3. query stores the query variables eg. {"mediaType":"movie","genre_id":"12"}
*/