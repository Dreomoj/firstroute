import React from 'react'
import "./learn.css"

const Learn = () => {
  return (
    <div className='main'>
        <div className='container'>
            <div className="bannerline">
            <div className="bannerdiv">
                <div className="bannertxt">
                    <h1>Good morning, Juliet!😀</h1>
                    <p>Your progress this week is Awesome! let’s keep it up and <br />
                        get a lot of academic rewards!
                    </p>
                    <button>View Progress</button>
                </div>
                <img src="./assets/element 1.svg" alt="" className='bannerimg' />
            </div>
            <div className="four">
                    <div className="two">
                        <div className="box1">
                            <img src="./assets/boxicon1.svg" alt="" />
                            <div className='boxtxt'>
                                <h1>102</h1>
                                <p>Pending Assignments</p>
                            </div>
                        </div>
                        <div className="box1">
                            <img src="./assets/boxicon2.svg" alt="" />
                            <div className='boxtxt'>
                                <h1>102</h1>
                                <p>Missed Assignments</p>
                            </div>
                        </div>
                    </div>

                    <div className="two">
                        <div className="box1">
                            <img src="./assets/boxicon3.svg" alt="" />
                            <div className='boxtxt'>
                                <h1>89.4%</h1>
                                <p>Attendance Rating</p>
                            </div>
                        </div>
                        <div className="box1">
                            <img src="./assets/boxicon4.svg" alt="" />
                            <div className='boxtxt'>
                                <h1>72.8%</h1>
                                <p>Session Performance</p>
                            </div>
                        </div>
                    </div>

                    <div className="bigtwo">
                        <div className="bigbox">
                            <div className='boxhead'>
                            <div className='bigboxtxt'>
                                <h1>Tasks Progress</h1>
                                <div className="bigboxp">
                                    <div className='bigboxsm'>
                                        <div className='dot'></div>
                                        <p>Complete</p>
                                    </div>
                                    <div className='bigboxsm'>
                                        <div className='dot2'></div>
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdate">
                                <p>Years</p>
                                <img src="./assets/chevron-down.svg" alt="" />
                            </div>
                            </div>
                        </div>

                        <div className="bigbox2">

                        </div>
                    </div>
            </div>
                </div>
            <div className="calendar">

            </div>
        </div>
        
    </div>
  )
}

export default Learn