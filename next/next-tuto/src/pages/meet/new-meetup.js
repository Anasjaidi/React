const { default: NewMeetupForm } = require("../../../components/meetups/NewMeetupForm")

const NewMeetUp = () => {

  const addMettHandler = (meet) => {
    console.log(meet);
  }

  return <NewMeetupForm onAddMeetup={addMettHandler}></NewMeetupForm>;
}

export default NewMeetUp