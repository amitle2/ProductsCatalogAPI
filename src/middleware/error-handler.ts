import { NextFunction, Request, Response } from "express";

function errorHandler(err: Error, request: Request, response: Response, next: NextFunction): void {
    response.status(500).send(err.message); // Out Security...
}

export default errorHandler;