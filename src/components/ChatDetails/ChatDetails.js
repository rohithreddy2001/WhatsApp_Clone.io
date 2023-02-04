

import classes from './chat_details.module.css'
import logo from '../../pages/Homepage/my_pic.jpg'
import smiley from '../ChatDetails/smiley.png'
import link from '../ChatDetails/link.png'
import mic from '../ChatDetails/mic_phone.png'
import search from '../ChatDetails/search_icon.png'
import menu from '../ChatDetails/menu.png'
import restore from '../ChatDetails/restore.png'

const ChatDetails =(props)=>{

    var arr1 = [...props.data[0]]
    var arr2 =[...props.data[1]]
    var data =[]

    var turn = "i"
    for(var i =0 , j =0 ; i<arr1.length || j<arr2.length ; ){
    if(i>=arr1.length){
        while(j<arr2.length){
            data.push(arr2[j])
            j++
        }
    }else if(j>=arr2.length){
        while(i<arr1.length){
            data.push(arr1[i])
            i++
        }
    }else{
        if(turn ==="i"){
            data.push(arr1[i])
            i++
            turn="j"
        }else{
            data.push(arr2[j])
            j++
            turn="i"
        }
    }
}

    // console.log(arr1)
    // console.log(arr2)
    console.log(data)
    return(
        <div className={classes.ctn}>
            <div className={classes.header}>
                <div className={classes.header_left}>
                    <img src={logo} className={classes.logo}/>
                    <h2 className={classes.name_}>Rohith</h2>
                </div>
                <div className={classes.header_right}>
                <img src={restore} alt='img not found' className={classes.restore}/>
                    <img src={search} alt='img not found' className={classes.search}/>
                    <img src={menu} alt='img not found' className={classes.menu}/>

                    
                </div>
            </div>
            <div className={classes.text_ctn}>
                <div className={classes.Text_ctn}>
                {data.map(item=>
                    <div className={classes.chat_ctn} >
                        <h2 className={classes.chat_text}>{item}</h2>
                    </div>
                )}
                </div>
                <div className={classes.msg_inputCtn}>
                    <img className={classes.smile_img} src={smiley} alt="img not found"></img>
                    <img className={classes.link_img} src={link} alt="img not found"></img>
                    <input className={classes.input_field} placeholder='Type a message'></input>
                    <img className={classes.mic_img} src={mic} alt="img not found"></img>

                </div>
            </div>
        </div>
    )
}

export default ChatDetails