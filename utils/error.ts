import {NextFunction, Request, Response} from "express";

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    //@TODO Do more advanced error handling
    res.status(500);
    res.json("error occurred")
}