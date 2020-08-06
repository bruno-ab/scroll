import {Request, Response, NextFunction} from 'express'
import {verify}from 'jsonwebtoken'
import {config} from '../config/config'

export default (request: Request, response:Response, next: NextFunction) => {

    const authHeader = request.headers.authorization
    if(!authHeader) return response.status(401).json({message:'JWT is missing'})
    const [, token] = authHeader.split(' ')
 
    try{
        const decoded = verify(token,config.jwt.secret)
        return next()
    }catch(err){
        response.status(401).json({message:'Invalid JWT Token'})
    }
}