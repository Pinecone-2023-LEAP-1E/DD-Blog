import Card from "@/components/Card";

const Blog = (props) => {
  const { blogs, blogDetail } = props;
  console.log("detail", blogDetail);

  return (
    <div>
      <h1>Blog Header</h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {blogs.map((blog) => (
        <Card blog={blog} blogDetail={blogDetail} />
      ))}
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const blog = await fetch("https://dev.to/api/articles?page=2&per_page=15");
  const blogs = await blog.json();

  const path = blogs[0].path;
  const blogDetails = await fetch(`https://dev.to/api/articles${path}`);
  const blogDetail = await blogDetails.json();

  return { props: { blogs, blogDetail } };
}
