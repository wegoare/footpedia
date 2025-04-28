export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About FootPedia
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to FootPedia! This blog was created by Ashutosh Chaudhary
              as a personal project to share his thoughts and football knowledge with the
              world. 
            </p>

            <p>
              On this website, you'll find weekly articles and updates of the current happenings in the football world
             . He is always on the lookout for new and exciting football deals and rumours
              , so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of enthusiasts can help
              each other to grow the sport.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
