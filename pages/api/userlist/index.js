import { userlist } from '../../../datasource/data';

export default function handler(req, res) {
  if (req.method === 'get') {
    res.status(200).json(userlist);
  }
  res.status(200).json(userlist);
}
