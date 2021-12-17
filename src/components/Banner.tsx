import { Container, Flex, Img, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            backgroundImage="/images/Background.png"
            h="300px"
            color="light.headingsAndText"
            alignItems="center"
            justifyContent="space-between"
        >
            <Container>
                <Text fontWeight="500" fontSize="2rem" lineHeight="54px">
                    5 continentes, infinitas possibilidades.
                </Text>
                <Text marginTop="1rem" fontSize="20px" lineHeight="30px">
                    Chegou a hora de tirar do papel a viagem que você sempre
                    sonhou.
                </Text>
            </Container>
            <Container boxSize="sm">
                <Img
                    src="/images/Airplane.png"
                    alt="avião"
                    transform="rotate(3deg) translateY(80px)"
                />
            </Container>
        </Flex>
    );
}
