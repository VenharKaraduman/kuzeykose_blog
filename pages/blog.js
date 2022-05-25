import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "../components/nav";

const blogPage = ({ posts }) => (
  <div className="container">
    <div className="">
      <Nav />
      <div className="flex justify-center">
        <div className="cursor-pointer w-2/4">
          {posts.map((post) => (
            <Link href={post.slug}>
              <div className="my-2 px-6 py-4 bg-green-50">
                <div className="flex">
                  <h className="font-semibold text-xl text-gray-800 font-sans w-3/4">
                    {post.title}
                  </h>
                  <div className="ml-2 text-gray-700 font-sans w-1/4">
                    | {post.date}
                  </div>
                </div>
                <div className="text-gray-700 text-lg">
                  <ReactMarkdown source={post.details} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        max-width: 1050px;
        width: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

blogPage.getInitialProps = async ({ req }) => {
  // "https://kuzeykose-blog.now.sh/api/posts"
  const res = await fetch("https://kuzeykose-blog.vercel.app/api/posts",{
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
  });
  const json = await res.json();
  return { posts: json.posts };
};

export default blogPage;
