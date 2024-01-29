import Image from "next/image";
import Card from "@/components/Card";

export default function Home(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <div>
      {/* <img src={posts[3].cover_image}></img> */}
      {posts.map((el) => (
        <Card title={el.title} url={el.cover_image} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?1");
  const posts = await res.json();

  const someData = "someData";

  return {
    props: {
      posts,
    },
  };
};
