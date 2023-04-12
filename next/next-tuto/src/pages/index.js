import Link from "next/link";
import MeetupList from "../../components/meetups/MeetupList";




const DUMMY_MMETUPS = [
    {
        id: "m1",
        title: "title",
        image: "image",
        address: "addr"
    }
]
const HomePage = () => {
    return (
			<>
				<MeetupList meetups={DUMMY_MMETUPS}>Hello</MeetupList>
                <Link href={"/news/anas-jaidi-hit-control"}>new news</Link>
                <a href="/news/reload-link">reload link</a>
			</>
		);
}

export default HomePage