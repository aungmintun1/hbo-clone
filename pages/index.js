import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/authCheck";
import LazyLoad from "react-lazyload";
import Placeholders from "../components/UI/Placeholders/Placeholders";

export default function Home() {
	const globalState = useStateContext();
	const router = useRouter();
	useEffect(() => {}, []);
	return AuthCheck(
		<MainLayout>
			<FeaturedMedia
				mediaUrl="https://www.youtube.com/embed/6npU3Fw6bb8?autoplay=1&mute=1&loop=1&start=16"  
				title="Godzilla x Kong: The New Empire"
				location="In theaters and on HBO MAX. Streaming throughout March 29."
				linkUrl="/movie/823464"
				type="front"
				mediaType={'movie'}
				mediaId={823464}
			/>
			<LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="large-v" />}>
				<MediaRow
					title="Movies"
					type="large-v"
					endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2024"
				/>
			</LazyLoad>

			<LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="small-h" />}>
				<MediaRow
					title="Series"
					type="small-h"
					endpoint="discover/tv?primary_release_year=2024"
				/>
			</LazyLoad>

			<LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="small-v" />}>
				<MediaRow
					title="Action"
					type="small-v"
					endpoint="discover/movie?with_genres=28&primary_release_year=2024"
				/>
			</LazyLoad>

			<LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="small-v" />}>
				<MediaRow
					title="Horror"
					type="small-v"
					endpoint="discover/movie?with_genres=27&primary_release_year=2024"
				/>
			</LazyLoad>

			<LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="large-h" />}>
				<MediaRow
					title="Animations"
					type="large-h"
					endpoint="discover/movie?with_genres=16&primary_release_year=2024"
				/>
			</LazyLoad>

			<LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="large-v" />}>
				<MediaRow
					title="Sci-fi"
					type="small-v"
					endpoint="discover/movie?with_genres=878&primary_release_year=2024"
				/>
			</LazyLoad>
		</MainLayout>,
	);
}