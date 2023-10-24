import express from 'express';
import axios from 'axios';
import { baseUrl, httpsOptions } from '../../Common/api.constant';

const getUsers = async(req: express.Request, res: express.Response) => {
  console.log('==> getUsers controller')
  try {
    const result = await axios.get(baseUrl.concat('/users'), httpsOptions);
    return res.status(200).send(result.data);
  } catch (error) {
    return res.status(500).send(error)
  }
}

export { getUsers }