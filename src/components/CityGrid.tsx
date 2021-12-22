import { Flex, SimpleGrid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function CityGrid() {
    return (
        <Flex align="center" justify="center">
            <SimpleGrid columns={[1, 4]} spacing={5}>
                <CityCard
                    capital="Londres"
                    country="Reino Unido"
                    src_capital="./images/londres.png"
                    alt="Londres"
                    src_flag="https://www.estudopratico.com.br/wp-content/uploads/2016/07/bandeira-reino-unido.jpg"
                    alt_flag="bandeira do Reino unido"
                />

                <CityCard
                    capital="Paris"
                    country="França"
                    src_capital="./images/paris.png"
                    alt="França"
                    src_flag="https://www.estudopratico.com.br/wp-content/uploads/2016/07/bandeira-reino-unido.jpg"
                    alt_flag="bandeira da França"
                />

                <CityCard
                    capital="Itália"
                    country="Roma"
                    src_capital="./images/roma.png"
                    alt="Roma"
                    src_flag="https://bestswimming.swimchannel.net/wp-content/uploads/2020/01/italy-italia-flag-of-italy-italian-flag-flag-1030x657.jpg"
                    alt_flag="bandeira da Itália"
                />

                <CityCard
                    capital="Praga"
                    country="República Tcheca"
                    src_capital="./images/praga.png"
                    alt="Praga"
                    src_flag="https://www.bandeirasnacionais.com/data/flags/ultra/cz.png"
                    alt_flag="bandeira da República Tcheca"
                />
            </SimpleGrid>
        </Flex>
    );
}
