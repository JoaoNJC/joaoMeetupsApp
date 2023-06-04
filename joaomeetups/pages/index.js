import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const DUMMY_LIST = [
  {
    id: 'm1',
    title: 'First meeting',
    image: 'https://images.contentstack.io/v3/assets/bltacc1a01c4d280f24/blt4d68f4eb4962b7d0/62f2199e57ac0577de0bfc99/pexels-chavdar-lungov-3996433.jpg?auto=webp&format=pjpg&quality=80&width=900&height=500&fit=crop',
    address: 'Address 12, 567, City',
    description: 'Photo of German landscape',
  },
  {
    id: 'm2',
    title: 'Second meeting',
    image: 'https://images.contentstack.io/v3/assets/bltacc1a01c4d280f24/blt4d68f4eb4962b7d0/62f2199e57ac0577de0bfc99/pexels-chavdar-lungov-3996433.jpg?auto=webp&format=pjpg&quality=80&width=900&height=500&fit=crop',
    address: 'Address 13, 567, City',
    description: 'Photo of German landscape',
  }
]

const HomePage = (props) => {

  return (
    <MeetupList meetups={props.meetups} />
  )
}

export async function getStaticProps() {

  MongoClient.connect();

  const client = await MongoClient.connect('mongodb+srv://joaonoel:lionel123@cluster0.jirbtnz.mongodb.net/')
  const db = client.db();

  const meetupsCollection = db.collection('meetings');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 100
  }
}

export default HomePage;