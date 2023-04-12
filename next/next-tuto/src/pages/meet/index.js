import Link from "next/link";
import MeetupList from "../../../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MMETUPS = [
	{
		id: "m1",
		title: "title",
		image: "image",
		address: "addr",
	},
	{
		id: "m2",
		title: "title2",
		image: "image2",
		address: "addr2",
	},
];


const HomePage = (props) => {

  // const [meetups, setMeetups] = useState([])

  // useEffect(() => {
  //   // send http reuest
  //   console.log(props);
  //   setMeetups(DUMMY_MMETUPS)
  

  // }, [])

	return (
		<>
			<MeetupList meetups={props.meetups}>Hello</MeetupList>
			<Link href={"/news/anas-jaidi-hit-control"}>new news</Link>
			<a href="/news/reload-link">reload link</a>
		</>
	);
};

/**
 * static site generation run only at build time (once)
 * */


// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MMETUPS
//     },
//     revalidate: 3 // re run the code in server to fetch new data every x secs
//   }
// }

/**
 * server side renders, run on every request 
 * */
 
export async function getServerSideProps(context) {
  // fetch data from server

  const req = context.req
  const res = context.res 
  return {
    props: {
      meetups: DUMMY_MMETUPS
    }
  }
}

export default HomePage;
