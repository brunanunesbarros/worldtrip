import {
    Text,
    Container,
    VStack,
} from "@chakra-ui/react";
import { BannerContinent } from "../components/BannerContinent";
import { CityGrid } from "../components/CityGrid";
import { DescriptionContinent } from "../components/DescriptionContinent";
import { Header } from "../components/Header";

export default function Continent() {
    return (
        <VStack>
            <Header />
            <BannerContinent />

            <Container maxW="container.lg">
                <DescriptionContinent />

                <Text
                    w="100%"
                    fontSize={["24px", "36px"]}
                    mb="2rem"
                    fontWeight="500"
                    color="dark.headingsAndText"
                >
                    Cidades +100
                </Text>

                <CityGrid />
            </Container>
        </VStack>
    );
}
