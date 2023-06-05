import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-[#FFF6E5]'>
        <div className="contain pt-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <h2 className='text-[#543EE0]'>CHATTER</h2>
            <div>
                <h4>Explore</h4>
                <br />
                <div className="flex flex-col">
                    <a href="#">Community</a>
                    <a href="#">Trending blogs</a>
                    <a href="#">Chatter for teams</a>
                </div>
            </div>
            <div>
                <h4>Support</h4>
                <br />
                <div className="flex flex-col">
                    <a href="#">Suport Docs</a>
                    <a href="#">Join Slack</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div>
                <h4>Official blog</h4>
                <br />
                <div className="flex flex-col">
                    <a href="#">Official blog</a>
                    <a href="#">Engineering blog</a>
                    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer