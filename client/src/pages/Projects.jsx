import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-bold'>Articles Gallore</h1>
      <p className='text-md text-gray-500 text-center'>Read many more football related articles ,along with transfer rumours and the latest club happenings from around the world</p>
      <CallToAction />
    </div>
  )
}