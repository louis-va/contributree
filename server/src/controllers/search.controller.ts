import { Request, Response } from 'express';

async function search(req: Request, res: Response) {
  try {
    const query = req.params.query;

    return res.status(200).send({ 
      query: query
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}

export default { search }