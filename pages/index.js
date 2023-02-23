import Content from "../components/home/content";

function Home({data}) {
  return <>
    <br/>
    <Content props={data.data}/>
  </>;
}

export async function getServerSideProps() {
  let accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  const url = "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=" + accessToken;
  const res = await fetch(url);

  const json = await res.json();

  return {
    props: {
      data: json
    }
  }
}

export default Home
