import React, { useState } from 'react'
import classes from './homepage.module.css'
import unlock from '../Homepage/unlock.png'
import lock_red from '../Homepage/lock_red.png'
import profile_pic from '../Homepage/my_pic.jpg'
import Enter from '../Homepage/Enter.png'

function Lock({unLockHandler,unLock,passwordHandler}) {


  return (
    <div className={classes.lock_ctn}>
      <form className={classes.lock_ctn}>
        <div className={classes.Lock_ctn}>
        <img src={profile_pic} className={classes.pic}></img>
        </div>
        <div className={classes.unlock_ctn}>
          <input 
            id='currentPass' 
            type='password'
            value={unLock} 
            placeholder='******' 
            className={classes.lockInput_ctn} 
            onChange={passwordHandler} 
            required>  
          </input>
          <img src={lock_red} className={classes.lock_img}></img>
          <img src={Enter} className={classes.Enter_img} onClick={unLockHandler}></img>
        </div>
        <div className={classes.Logging}>
          <h3 className={classes.logout}>Logout</h3>
          <h3 className={classes.forgot}>Forgot Password</h3>
        </div>
      </form>
    </div>
  )
}

export default Lock
