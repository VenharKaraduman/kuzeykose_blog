import { getPosts } from "../../src/blog-posts";

const posts = getPosts();

export default function handler(req, res) {
  res.status(200).json({ posts });
}
