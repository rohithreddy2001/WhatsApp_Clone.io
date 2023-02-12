

import classes from './homepage.module.css'
import profile_pic from '../Homepage/my_pic.jpg'
import search_icon from '../Homepage/search_icon.png'
import ChatItem from '../../components/ChatItem/ChatItem'
import { useState } from 'react'
import ChatDetails from '../../components/ChatDetails/ChatDetails'
import my_pic6 from '../Homepage/my_pic6.jpeg'
import my_pic from '../Homepage/my_pic.jpg'
import my_pic2 from '../Homepage/my_pic2.jpg'
import my_pic3 from '../Homepage/my_pic3.jpg'
import my_pic4 from '../Homepage/my_pic4.jpg'
import my_pic5 from '../Homepage/my_pic5.jpg'
import menu from '../Homepage/menu.png'
import chat from '../Homepage/chat.png'
import status from '../Homepage/status.png'
import users from '../Homepage/users.png'
import lock from '../Homepage/lock.png'
import Lock from './Lock'

const Homepage =()=>{

    const [whatsAppLock,setWhatsAppLock] = useState(true)

    const [unLock,setUnLock] = useState('')

    const passwordHandler = (event) => {
        setUnLock(event.target.value)
        event.preventDefault()
    }

    const lockHandler = (e) => {
        console.log("WhatsApp Locked")
        setWhatsAppLock(!whatsAppLock)
        e.preventDefault();
    }

    let Pass = "1234"
    const unLockHandler = (e) => {
        console.log("unlock")
        if(Pass === unLock) {
            setWhatsAppLock(!whatsAppLock)
            setUnLock('')
        }
        else {
            setWhatsAppLock(whatsAppLock)
            setUnLock('')        
        }
        e.preventDefault();
    }

    
    const chats =[
        {
            id_:0,
            name_:"Rohith",
            time_:"08:24",
            img_:my_pic
        },
        {
            id_:1,
            name_:"Bablu",
            time_:"01:24",
            img_:my_pic2
        },
        {
            id_:2,
            name_:"rr",
            time_:"10:24",
            img_:my_pic3
        },
        {
            id_:3,
            name_:"ro",
            time_:"02:24",
            img_:my_pic4
        },
        {
            id_:4,
            name_:"rrr",
            time_:"01:23",
            img_:my_pic2
        },
        {
            id_:1,
            name_:"Bablu",
            time_:"01:24",
            img_:my_pic2
        },
        {
            id_:2,
            name_:"rr",
            time_:"10:24",
            img_:my_pic3
        },
        {
            id_:3,
            name_:"ro",
            time_:"02:24",
            img_:my_pic4
        },
        {
            id_:4,
            name_:"rrr",
            time_:"01:23",
            img_:my_pic2
        },
        {
            id_:2,
            name_:"rr",
            time_:"10:24",
            img_:my_pic3
        },
        {
            id_:3,
            name_:"ro",
            time_:"02:24",
            img_:my_pic4
        },
        {
            id_:4,
            name_:"rrr",
            time_:"01:23",
            img_:my_pic2
        },
        
        
    ]

    const [currentData , setCurrentData] = useState([
        [
            "Hi",
            'How are you?',
        ],
        [
            "Hello",
            "Fine , wbu?"
        ]
    ])

    const toggleChatData =(data)=>{
        setCurrentData(data)
        console.log(data)
    }


    // const [search,setSearch] = useState('')

    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    // }

    // const filteredPersons = chats.filter(
    //     person => {
    //       return (
    //         person
    //         .name_
    //         .toLowerCase()
    //         .includes(search.toLowerCase()) ||
    //         person
    //         .time_
    //         .toLowerCase()
    //         .includes(search.toLowerCase())
    //       );
    //     }
    //   );



 
    return(
        <div className={classes.ctn}>
            {
                whatsAppLock && <Lock unLockHandler={unLockHandler} unLock={unLock} passwordHandler={passwordHandler}/>
            }
            <div className={classes.left}>
                <div className={classes.top}>
                    <div className={classes.t_left}>
                        <img src={profile_pic} className={classes.pic}></img>
                        <h2 className={classes.heading}>Chats</h2>
                    </div>
                    <div className={classes.t_right}>
                        {/* <button className={classes.filter}>Filter</button> */}
                        <img src={lock} className={classes.lock} onClick={lockHandler}></img>
                        <img src={users} className={classes.users}></img>
                        <img src={status} className={classes.status}></img>
                        <img src={chat} className={classes.chat}></img>
                        <img src={menu} className={classes.menu}></img>

                    </div>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.i_ctn}>
                        <input 
                            type="text" 
                            className={classes.i_field} 
                            placeholder="Search or start new chat"
                            // onChange={handleChange}
                             />
                        <img src={search_icon} alt="icon not found" className={classes.icn}></img>
                    </div>
                    <div className={classes.contact_ctn}>
                        {
                            chats.map(item=><ChatItem props={item} toggleChatData={toggleChatData}/>)
                        }
                    </div>   
                </div>
            </div>
            <div className={classes.right}>
                <ChatDetails data={currentData}/>
            </div>
            {/* {filteredPersons} */}
        </div>
    )
}


export default Homepage