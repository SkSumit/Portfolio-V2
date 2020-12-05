import axios from "axios";

const fetchData = async () => {
  try {
    const res = await axios.get(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASETABLE}/Table%201?api_key=${process.env.AIRTABLE_APIKEY}`
    );

    return res.data.records.map((project) => {
      return {
        github: project.fields.Github,
        name: project.fields["Project Name"],
        description: project.fields.TagLine,
        techStack: project.fields["Technology Used"],
        featured: project.fields.Featured ? true : false,
        url: project.fields.Demo ? project.fields.Demo : null,
      };
    });
  } catch (error) {
    return error;
  }
};

export const fetchMediumPosts = async () => {
  try {
    const res = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kolsum24`
    );

    return res.data.items.map((post) => {
      return {
        categories: post.categories,
        postURL: post.link,
        publishedDate: post.pubDate,
        thumbnail: post.thumbnail,
        title: post.title,
      };
    });
  } catch (error) {
    return error;
  }
};

export default fetchData;
