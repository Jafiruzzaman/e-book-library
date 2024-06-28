import { NextFunction, Request, Response } from "express";
const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      let reqBody = await req.body;
      const parseBody = await schema.parseAsync(reqBody);
      reqBody = parseBody;
      return next();
    } catch (error: any) {
      return res.status(500).json({
        message: error.errors[0].message,
      });
    }
  };
export { validate };
