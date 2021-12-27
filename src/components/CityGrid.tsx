import { Flex, SimpleGrid } from "@chakra-ui/react";

import { CityCard } from "./CityCard";

type CityGridProps = {
    cityCards: {
        flagUrl: string;
        bannerUrl: string;
        country: string;
        capital: string;
    }[];
};

export function CityGrid(props: CityGridProps) {
    return (
        <Flex align="center" justify="center">
            <SimpleGrid columns={[1, 4]} spacing={5}>
                {props.cityCards.map((city) => {
                    return (
                        <CityCard 
                            key={city.capital}
                            bannerUrl={city.bannerUrl}
                            flagUrl={city.flagUrl}
                            country={city.country}
                            capital={city.capital}
                        />
                    )
                })}
            </SimpleGrid>
        </Flex>
    );
}
