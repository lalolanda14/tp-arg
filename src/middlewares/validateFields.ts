import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ success: false, errors: errors.array() });
  }
  next();
};
export { validateFields };
