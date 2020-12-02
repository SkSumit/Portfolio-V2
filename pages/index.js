import Head from "next/head";
import axios from "axios";
import fetchData from "../utils/api";
import Intro from "../components/Intro";

import CardRow from "../components/CardRow";
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero  is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-vcentered">
              <div className="column">
                <Intro />
              </div>
              <div className="column">
                <h1 className="subtitle is-3 has-text-centered">
                  ⚡ Featured Projects
                </h1>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-parent">
                    <CardRow projects={props.data} />
                  </div>
                </div>
                <h1 className="subtitle is-3 has-text-centered">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={"https://github.com/SkSumit?tab=repositories"}
                    className="subtitle is-3 has-text-centered"
                  >
                    See all of my projects 🚀
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetchData();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
