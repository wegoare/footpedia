import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [offerListings, setOfferListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      
      setPosts(data.posts);
      setOfferListings(data.posts);
    };
    fetchPosts();
  }, []);
  console.log(posts)

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-semibold lg:text-6xl'>Welcome to <span className='font-bold text-orange-500'> Football's Finest</span> website</h1>
       
       <div>
         <p className='text-slate-500 text-xs sm:text-base'>
          Here you'll find a variety of articles and new on the latest football updates and transfer rumours, </p>
          <p className='text-slate-500 text-xs sm:text-base'>Along with the an archive of history's <span className='text-red-500'> Greatest Moments</span>
        </p>
        </div>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      {/* <div className='p-3 bg-yellow-200 dark:bg-slate-700'>
        <CallToAction />
      </div> */}
      <Swiper navigation>
  {offerListings &&
    offerListings.length > 0 &&
    offerListings.map((listing) => (
      <SwiperSlide key={listing._id}>  {/* ✅ Added key here */}
        <div
          style={{
            background: `url(${listing.image}) center no-repeat`,
            backgroundSize: 'cover',
          }}
          className='h-[500px]'
        ></div>
      </SwiperSlide>
    ))}
</Swiper>


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
