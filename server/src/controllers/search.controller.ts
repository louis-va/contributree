import { Request, Response } from 'express';
import { userSearch } from '../services/github-search.service';

async function search(req: Request, res: Response) {
  try {
    const query = req.params.query;

    userSearch(query, 6)
      .then((results: any) => {
        if (results !== null) {
          return res.status(200).send(results.map((result: any) => {
            return {
              username: result.username,
              avatar: result.avatar
            }
          }));
        } else {
          return res.status(404).send({ 
            message: 'No users found'
          });
        }
      })
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}

export default { search }