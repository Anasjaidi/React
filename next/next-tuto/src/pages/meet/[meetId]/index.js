import MeetupDetails from "../../../../components/meetups/MeetupDetails"

const MeetUpItem = (props) => {
  return (
    <MeetupDetails image={props.image}  title={props.title} address={props.address} description={props.description} />
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
    fallback: false,
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
  const ID = context.params.meetId;

  return {
    props: {
      image: "anas",
      title: "anas",
      address: "anas",
      description: "anas",
    }
  }
}

export default MeetUpItem