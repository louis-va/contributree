import { Request, Response } from 'express';

async function getUser(req: Request, res: Response) {
  try {
    const username = req.params.id;

    return res.status(200).send({ 
      username: username
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}

export default { getUser }