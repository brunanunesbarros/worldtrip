import { Box, Flex, Image, Text, Avatar } from "@chakra-ui/react";

type CityCardProps = {
    bannerUrl: string;
    flagUrl: string;
    country: string;
    capital: string;
};

export function CityCard(props: CityCardProps) {
    return (
        <Flex
            w="100%"
            flexDirection="row"
            justifyContent="center"
            align="center"
            mb="2rem"
            gap="3rem"
        >
            <Box w="100%">
                <Image src={props.bannerUrl} alt={props.capital} />

                <Box
                    borderWidth="0 1px 1px 1px"
                    borderColor="yellow.highlight"
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    h="80px"
                >
                    <Box>
                        <Text color="dark.headingsAndText">
                            {props.capital}
                        </Text>
                        <Text color="dark.info">{props.country}</Text>
                    </Box>
                    <Avatar
                        size="xs"
                        name={props.country}
                        src={props.flagUrl}
                    />
                </Box>
            </Box>
        </Flex>
    );
}
