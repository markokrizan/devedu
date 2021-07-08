import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getSiteData } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({
  allPosts: { edges },
  preview,
  generalSettingsTitle,
  generalSettingsDescription,
}) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro
            generalSettingsTitle={generalSettingsTitle}
            generalSettingsDescription={generalSettingsDescription}
          />
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

// Use getStaticProps for static generation
export async function getServerSideProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const siteData = await getSiteData();

  return {
    props: { allPosts, preview, ...siteData },
  };
}
