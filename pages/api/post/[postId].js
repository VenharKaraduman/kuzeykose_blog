import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import { getPosts } from "../../../src/blog-posts";
 await cors(req, res)
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

const posts = getPosts();
await cors(req, res);
export default (req, res) => {
  res.json({
    post: posts.find((post) => post.slug === req.query.postId),
  });
};
