import Head from "next/head";
import _ from "lodash";
import fetchData, { fetchMediumPosts } from "../utils/api";
import Intro from "../components/Intro";
import Section from "../components/Section";
import CardRow from "../components/CardRow";
import dummyPosts from "../utils/dummyPosts";
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Section>
          <Intro />
        </Section>

        <h1 className="title is-3 mt-3">⚡ Featured Projects</h1>
        <CardRow data={props.data} projects={true} />

        <h1 className="subtitle is-3 has-text-centered">
          <a
            style={{
              textDecorationStyle: "wavy",
              textDecorationLine: "underline",
              textDecorationColor: "red",
              textUnderlineOffset: "10px",
            }}
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/SkSumit?tab=repositories"}
            className="subtitle is-5 has-text-centered"
          >
            See all of my projects 🚀
          </a>
        </h1>
      </Section>
      <Section>
        <h1 className="title is-3  ">⚡ My blogs</h1>
        <CardRow data={_.concat(props.posts, dummyPosts)} projects={false} />
      </Section>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetchData();
  const posts = await fetchMediumPosts();

  if (!data) {
    return {
      notFound: true,
    };
  }
  if (data.isAxiosError) {
    return {
      props: {
        error: true,
      },
    };
  }

  return {
    props: {
      data,
      posts,
    },
  };
}


