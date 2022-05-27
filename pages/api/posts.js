import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import { getPosts } from "../../src/blog-posts";
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

const posts = getPosts();

export default async (req, res) => {
  await cors(req, res)
  res.json({ posts });
};
