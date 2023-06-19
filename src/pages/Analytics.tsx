import {VscBook} from 'react-icons/vsc'
import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineAnalytics} from 'react-icons/md' 

const Analytics = () => {
  return (
    <div className='p-8'>
        <h4>Post Analytics</h4>
        
        <br />

        <h5>May 2023, <span className="text-base font-normal">25days so far</span></h5>
        <div className="h-1 w-full bg-[#7664E6]"></div>
        <h5 className="mt-2">Posts highlights</h5>
        <h4>Top Posts</h4>
        <div className='w-[60%] py-8'>
            <div className='flex gap-4 items-center'>
                <div className="w-8 h-8 md:w-16 md:h-16 bg-cyan-800 rounded-[50%]">

                </div>
                <div className="flex flex-col">
                    <h5>Grace Ikpang</h5>
                    <p><span>Product designer </span> | May 25th, 2023</p>
                </div>
            </div>
            <br />
            <h4>Starting out as a Product designer</h4>
            <p className="tex-sm flex gap-2 items-center"><span> <VscBook/> </span> 10 mins read</p>
            <br />
            <p>Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.</p>
            <div className="flex justify-between">
                <div>
                    <div className='flex gap-2 items-center'><span><AiOutlineComment/> </span> 200 </div>
                </div>
                <div className="h-3"></div>
                <div>
                    <div className='flex gap-2 items-center'><span><AiOutlineHeart/> </span> 120 </div>
                </div>
                <div className="h-3"></div>
                <div>
                    <div className='flex gap-2 items-center'><span><MdOutlineAnalytics/> </span> 2190 views </div>
                </div>
            </div>
            <br/>
            <button className="btn-pry w-fit p-3">View post activity</button>
        </div>

        <h5>Posts summary</h5>
        <p>May 2023 summary</p>
        <div className="h-1 w-full bg-[#7664E6]"></div>
        
        <div className="h-2"></div>

        <div className="w-full md:w-1/2 ">
            <div className="flex justify-between">
                <div className="text-center">
                  <p className="font-bold">Posts</p>
                  <h5>3</h5>
                </div>
                <div className="text-center">
                  <p className="font-bold">Posts Impressions</p>
                  <h5>2.98k Views</h5>
                </div>
            </div>
            <br />
            <div className="flex justify-between">
                <div className="text-center">
                  <p className="font-bold">Profile visits</p>
                  <h5>300</h5>
                </div>

                <div className="text-center">
                  <p className="font-bold">New Followers</p>
                  <h5>300</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics