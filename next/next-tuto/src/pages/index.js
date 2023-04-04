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
        <MeetupList meetups={DUMMY_MMETUPS}>Hello</MeetupList>
    );
}

export default HomePage