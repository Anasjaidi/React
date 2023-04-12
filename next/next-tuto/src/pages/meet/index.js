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

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MMETUPS
    }
  }
}

export default HomePage;
