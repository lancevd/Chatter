import {Link} from 'react-router-dom'

const SideBar = () => {
    const sideBarMenuItems: {
        icon: string,
        name: string,
        path: string
    }[] = [
        {
            icon: '',
            name: 'Feed',
            path: '/'
        },
        {
            icon: '',
            name: 'Bookmarks',
            path: '/bookmarks'
        },
        {
            icon: '',
            name: 'Team Blog',
            path: '/team-blogs'
        },
        {
            icon: '',
            name: 'Drafts',
            path: '/drafts'
        },
        {
            icon: '',
            name: 'Analytics',
            path: '/analytics'
        }
    ]
  return (
    <aside>
       <h1>Chatter</h1> 
       <div>
        <h5>Overview</h5>
        <menu className='flex flex-col'>
            {sideBarMenuItems.map((menuItem) =>
            <Link to={menuItem.path}><span>{menuItem.icon}</span> <p>{menuItem.name}</p> </Link>
            )}
        </menu>
       </div>
    </aside>
  )
}

export default SideBar