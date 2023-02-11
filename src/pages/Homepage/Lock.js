import React, { useState } from 'react'
import classes from './homepage.module.css'
import unlock from '../Homepage/unlock.png'
import lock_red from '../Homepage/lock_red.png'
import profile_pic from '../Homepage/my_pic.jpg'
import Enter from '../Homepage/Enter.png'

function Lock({unLockHandler}) {


  return (
    <div className={classes.lock_ctn}>
      <div className={classes.Lock_ctn}>
      <img src={profile_pic} className={classes.pic}></img>
      </div>
      <div className={classes.unlock_ctn}>
        <input type='password' name='lock' placeholder='******' className={classes.lockInput_ctn} required></input>
        <img src={lock_red} className={classes.lock_img}></img>
        <img src={Enter} className={classes.Enter_img} onClick={unLockHandler}></img>
      </div>
    </div>
  )
}

export default Lock
