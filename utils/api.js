import axios from "axios";

const fetchData = async () => {
  const res = await axios.get(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASETABLE}/Table%201?api_key=${process.env.AIRTABLE_APIKEY}`
  );

  return res.data.records;
};

export default fetchData;
