import {
    Box,
    Flex,
    Image,
    Text,
    Avatar,
} from "@chakra-ui/react";

type CardProps = {
    src_capital: string;
    alt: string;
    country: string;
    capital: string;
    src_flag: string;
    alt_flag: string;
}

export function CityCard(props: CardProps) {
    return (
      
        <Flex w="100%" flexDirection="row" justifyContent="center" align="center" mb="2rem" gap="3rem">
            <Box>
                <Image src={props.src_capital} alt={props.alt} />

            <Box borderWidth='0 1px 1px 1px' borderColor="yellow.highlight" display="flex" justifyContent="space-around" alignItems="center" h="80px">
                <Box>
                <Text color="dark.headingsAndText">{props.capital}</Text>
                <Text color="dark.info">{props.country}</Text>
                </Box>
                <Avatar size="xs" name={props.src_flag} src={props.src_flag} />
            </Box>
            </Box>
        </Flex>
    )
}
