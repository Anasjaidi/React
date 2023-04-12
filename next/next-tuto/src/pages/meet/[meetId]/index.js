import MeetupDetails from "../../../../components/meetups/MeetupDetails"

const MeetUpItem = (props) => {
  return (
    <MeetupDetails image="image"  title="new title" address="new address" description="new description"/>
  )
}

/**
 * we add this function if we use static site generation in a dynamic component
 * 
 * defining all possible routes that will go with this generation 
 * 
 * because its run on build time only and we need to define possible routes
*/
export function getStaticPaths() {
  return {
		paths: [
			{
				params: {
					meetId: "m1",
				},
			},
			{
				params: {
					meetId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
  const ID = context.param.meetId;

  return {
    props: {
      image: "",
      title: "",
      address: "",
      description: "",
    }
  }
}

export default MeetUpItem