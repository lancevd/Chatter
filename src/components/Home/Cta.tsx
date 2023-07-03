import { Link } from 'react-router-dom'
import Cta1 from '../../assets/images/cta1.png'
import Cta2 from '../../assets/images/cta2.png'
import Cta3 from '../../assets/images/cta3.png'

const Cta = () => {
  return (
    <div>
        <div className="contain">
            <div className="w-[80%] flex gap-12 py-8 m-auto">
                <div className="hidden lg:w-1/3 lg:flex">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex justify-center items-center">
                        <img src={Cta1} alt="" className='w-full h-full'/>
                    </div>
                    <div className="w-36 h-32 relative top-24 left-10 rounded-[50%] overflow-hidden flex justify-center items-center">
                        <img src={Cta2} alt="" className='w-full h-full'/>
                    </div>
                    <div className="w-32 h-32 relative right-[65%] top-48 rounded-full overflow-hidden flex justify-center items-center">
                        <img src={Cta3} alt="" className='w-full h-full'/>
                    </div>
                </div>

                <div className="w-full lg:w-2/3">
                    <h2 className='w-[90%]'>Write, read and connect with great minds on chatter</h2>
                    <br />
                    <p className='w-[90%]'>Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals  </p>
                    <br />
                    <Link to='/feed'><button className="btn-pry">Get Started</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cta