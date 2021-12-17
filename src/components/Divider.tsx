import { Flex, Divider } from "@chakra-ui/react";

export function DividerDescription() {
    return (
        <Flex mt="4rem" mb="4rem" justifyContent="center">
            <Divider
                borderColor="dark.black"
                borderBottomWidth="2px"
                width="4rem"
            />
        </Flex>
    );
}
