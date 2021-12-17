import { Container, Text } from "@chakra-ui/react";

export function Description() {
    return (
        <Container justifyContent="center">
            <Text
                fontWeight="500"
                fontSize="1.5rem"
                color="dark.headingsAndText"
                textAlign="center"
            >
                Vamos nessa?
            </Text>
            <Text
                fontWeight="500"
                fontSize="1.5rem"
                color="dark.headingsAndText"
                textAlign="center"
                mb="5rem"
            >
                Então escolha seu continente
            </Text>
        </Container>
    );
}
