import Image from "next/image";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home(props) {
  const { highlight, post, trending } = props;
  console.log(posts);
  console.log(posts2);
  return (
    <div className="">
      <Highlight highlight={highlight} />
      <Trending trending={trending} />
      <Post post={post} />

      {/* <Header />
      <div className="w-[2420px] h-[3005px] flex-col justify-start items-center gap-[100px] flex mx-auto p-[50px]">
        <div className="w-[2220px] h-[25px] justify-start items-center gap-10 flex pl-[20px]">
          <div className="text-orange-300 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            All
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Design
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Travel
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Fashion
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Technology
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Branding
          </div>
        </div>
        <div className="w-[2216px] h-[1585px] flex-row justify-start items-center gap-8 flex flex-wrap">
          <img src={posts[3].cover_image}></img>
          {posts.map((el) => (
            <Card title={el.title} url={el.cover_image} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const highlights = await fetch(
    "https://dev.to/api/articles?per_page=1&top=1"
  );
  const highlight = await highlights.json();

  const trendings = await fetch("https://dev.to/api/articles?per_page=5&top=1");
  const trending = await trendings.json();

  const posts = await fetch("https://dev.to/api/articles?per_page=15");
  const post = await posts.json();

  return {
    props: {
      highlight,
      post,
      trending,
    },
  };
};
