import { Container, Text } from "@chakra-ui/react";

export function Description() {
    return (
        <Container
            justifyContent="center"
            fontWeight="500"
            color="dark.headingsAndText"
            textAlign="center"
            fontSize={["20px", "1.5rem"]}
            lineHeight={["30px"]}
            mb="2rem"
        >
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
        </Container>
    );
}
