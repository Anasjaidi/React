import classes from './MeetupDetails.module.css'

const MeetupDetails = (props) => {
  return (
    <div className={classes.details}>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.address}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default MeetupDetails