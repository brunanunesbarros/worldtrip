import { Text, Container, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { BannerContinent } from "../../components/BannerContinent";
import { CityGrid } from "../../components/CityGrid";
import { DescriptionContinent } from "../../components/DescriptionContinent";
import { Header } from "../../components/Header";

import { getPrismicClient } from "../../services/prismic";

interface Continent {
    uid: string;
    bannerUrl: string;
    name: string;
    description: string;
    count_country: number;
    count_language: number;
    count_cities: number;
    city_cards: 
        {
            flagUrl: string;
            bannerUrl: string;
            country: string;
            capital: string;
        }[];
}

interface ContinentsProps {
    continent: Continent;
}

export default function Continent({ continent }: ContinentsProps) {
    return (
        <VStack>
            <Head>
                <title>Worldtrip | {continent.name}</title>
            </Head>
            <Header />
            <BannerContinent
                bannerUrl={continent.bannerUrl}
                name={continent.name}
            />

            <Container maxW="container.lg">
                <DescriptionContinent
                    description={continent.description}
                    count_country={continent.count_country}
                    count_language={continent.count_language}
                    count_cities={continent.count_cities}
                />

                <Text
                    w="100%"
                    fontSize={["24px", "36px"]}
                    mb="2rem"
                    fontWeight="500"
                    color="dark.headingsAndText"
                >
                    Cidades +100
                </Text>

                <CityGrid 
                    cityCards={continent.city_cards}
                />
            </Container>
        </VStack>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;
    const prismic = getPrismicClient();

    const continentDetails = await prismic.getByUID("continentdetails", String(slug), {});

    return {
        props: {
            continent: {
                uid: continentDetails.uid,
                bannerUrl: continentDetails.data.banner.url,
                name: continentDetails.data.name,
                description: continentDetails.data.description,
                count_country: continentDetails.data.count_country,
                count_language: continentDetails.data.count_language,
                count_cities: continentDetails.data.count_cities,
                city_cards: continentDetails.data.city_card.map((city) => {
                    return {
                        flagUrl: city.flag.url,
                        bannerUrl: city.banner_city.url,
                        country: city.country,
                        capital: city.capital,
                    };
                }),
            },
        },
    };
};
