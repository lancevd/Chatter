import Lytics from '../../assets/icons/analytics.svg'
import Community from '../../assets/icons/community.svg'
import Content from '../../assets/icons/content.svg'

const Features = () => {
  return (
    <div className='contain'>
        <div className="w-[80%] m-auto">
            <h2 className="text-center">Why you should join chatter?</h2>
            <br/>
            <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</p>
            <br />
            <FeatureBox />
        </div>

    </div>
  )
}


export const FeatureBox = () => {
    const BoxDetails: {
        icon?: any,
        title: string,
        content: string
    }[] = [
        {
            icon: `${Lytics}`,
            title: 'Analytics',
            content: 'Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time'
        },
        {
            icon: `${Community}`,
            title: 'Social interactions',
            content: 'Users on the platform can interact with posts they like, comment and engage in discussions'
        },
        {
            icon: `${Content}`,
            title: 'Content creation',
            content: 'Write nice and appealing with our in-built markdown, a rich text editor'
        }
    ]

  return (
    <div className='flex flex-col gap-8 lg:flex-row'>
        {BoxDetails.map((box) =>(
            <div className="w-full border border-[#D0D0D0] rounded-md py-3 px-6">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-[#D6D1F833]">
                   <img src={box.icon} alt="" /> 
                </div>
                <h4>{box.title}</h4>
                <p>{box.content}</p>
            </div>
        ))}
    </div>
  )
}


export default Features