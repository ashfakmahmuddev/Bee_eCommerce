import React from "react";
import Container from "../commonUi/Container";
import Images from "../commonUi/Images";
import { blogData } from "/src/data/data"; // ← এখানে import
import { Link } from "react-router-dom";

const BlogPart = () => {
  // শুধু latest ৩টা দেখাতে চাইলে slice করতে পারেন
  const latestBlogs = blogData.slice(0, 3);

  return (
    <div className="pb-15">
      <Container>
        <div className="text-center uppercase">
          <h4 className="font-light">Latest From</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Blog</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {latestBlogs.map((blog) => (
            <div key={blog.id} className="">
              <Images imgSrc={blog.image} alt={blog.title} />
              <div className="pt-3.75">
                <h4 className="text-[#FFAE00] text-base font-medium">
                  {blog.date}
                </h4>
                <span className="text-[#282828] text-lg py-1.5 block">
                  {blog.title}
                </span>

                  <Link
                    to={blog.link}
                    className="text-[#333333] text-sm hover:text-[#FFAE00] transition-all duration-400"
                  >
                    Read more
                  </Link>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPart;