import schedule from 'node-schedule'

import {getDndData} from '../../modules/services/getDatafromApi'


const initAllScheduleJobs = () => {
    console.log('starting schedule jobs...')
    schedule.scheduleJob(executiontimers.dndData, function(){
        //getDndData()
    })
    
}



const executiontimers = {
    dndData: '*/2 * * * *'
}

export {initAllScheduleJobs}