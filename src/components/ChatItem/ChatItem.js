



import classes from './chat_item.module.css'
import pic from '../ChatItem/pic.jpeg'

const ChatItem =(props)=> {
    console.log(props)
    function setChatDetails() {
        props.toggleChatData([
            [
                "hello , please don't ignore",
                "okay, i will subscribe"
            ],
            [
                "Like, Share and Subscribe to my youtube channel first ,if you have any query you can post it on my email which is there in my bio then i will reply",
                "okay , then i will talk"
            ]
        ])
    }
    return(
        <div className={classes.item} onClick={setChatDetails}>
            <div className={classes.left}>
                <img src={props.props.img_} className={classes.chat_Pic}></img>
                <h2 className={classes.name_}>{props.props.name_}</h2>
            </div>
            <div className={classes.right}>
                <h3 className={classes.time_}>{props.props.time_}</h3>
            </div>
        </div>
    )
}


export default ChatItem