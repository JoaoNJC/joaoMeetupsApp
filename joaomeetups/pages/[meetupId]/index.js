import MeetupDetail from "../../components/meetups/MeetupDetail"


const MeetupDetails = () => {

  return (
    <MeetupDetail
      title="Meeting 1"
      image=""
      address=""
      description=""
    />
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      }
    ]
  }
}

export function getStaticProps(context) {
  //fetch data for a single meeting
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: '',
        id: meetupId,
        title: '',
        address: '',
        description: ''
      }
    }
  }
}

export default MeetupDetails