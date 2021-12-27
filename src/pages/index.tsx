import { Flex } from "@chakra-ui/react";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Banner } from "../components/Banner";
import Carrousel from "../components/Carrousel";
import { Description } from "../components/Description";
import { DividerDescription } from "../components/Divider";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

import { getPrismicClient } from "../services/prismic";

interface Continent {
    uid: string;
    slug: string;
    bannerUrl: string;
    name: string;
    description: string;
    alt: string;
}

interface Continents {
    continents: Continent[];
}

interface ContinentsProps {
    continentResults: Continents
}

export default function Home({ continentResults }: ContinentsProps) {
    return (
        <Flex maxWidth="100vw" minHeight="100vh" flexDirection="column">
            <Head>
                <title>Worldtrip</title>
            </Head>
            <Header />
            <Banner />
            <Services />
            <DividerDescription />
            <Description />
            <Carrousel banners={continentResults.continents} />
        </Flex>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const prismicResponse = await prismic.query(
        [Prismic.predicates.at("document.type", "continents")],
        {
            fetch: [
                "uid",
                "continentsBanner",
                "continentTitle",
                "continentDescription",
            ],
        }
    );

    const continents = prismicResponse.results.map(continent => {
        return {
            uid: continent.uid,
            slug: continent.uid,
            bannerUrl: continent.data.continentbanner.url,
            name: continent.data.continenttitle,
            description: continent.data.continentdescription,
            alt: continent.data.continentbanner.alt
        }
    })

    return {
        props: {
            continentResults: {
                continents
            }
        },
        revalidate: 60 * 30
    };
};
