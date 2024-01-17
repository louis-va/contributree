import { Request, Response } from 'express';
import { userContributions, getAllContributions } from '../services/github.service'

async function getUserContributions(req: Request, res: Response) {
  try {
    const username = req.params.id;

    getAllContributions(username)
      .then((data: userContributions | null) => {
        if (data !== null) {
          return res.status(200).send({ 
            avatar: data.avatar,
            total: data.total,
            max: data.max,
            years: data.years
          });
        } else {
          return res.status(500).send({ 
            message: 'User not found'
          });
        }
      })
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}

export default { getUserContributions }