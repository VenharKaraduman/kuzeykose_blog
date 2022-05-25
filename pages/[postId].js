import React from "react";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import Nav from "../components/nav";

const BlogPost = ({ post }) => (
  <div>
    <Nav />
    <div className="mt-8 text-gray-800">
      <div className="container">
        <div className="overflow-hidden">
          <div className="font-thin text-4xl mb-4">{post && post.title}</div>
          <article className="prose lg:prose-lg">
            <ReactMarkdown source={post && post.allwriten} />
          </article>
          <div className="flex mt-10 justify-end">{post && post.date}</div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        max-width: 1050px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  //`https://kuzeykose-blog.now.sh/api/post/${query.postId}`
  //`http://localhost:3000/api/post/${query.postId}`
  //kuzeykose.com
  const res = await fetch(`https://kuzeykose-blog.vercel.app/api/post/${query.postId}`, {
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
  });
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
