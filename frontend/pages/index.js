import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts: { edges }, preview, siteData }) {
  const stickyPostIndex = edges.findIndex((edge) => !!edge.node.isSticky);
  const heroPostIndex = stickyPostIndex >= 0 ? stickyPostIndex : 0;

  const heroPost = edges[heroPostIndex].node;

  const morePosts = [...edges];
  morePosts.splice(heroPostIndex, 1);

  return (
    <>
      <Layout preview={preview} siteData={siteData}>
        <Head>
          <title>{siteData.generalSettingsDescription}</title>
        </Head>
        <Container>
          <Intro {...siteData} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}
