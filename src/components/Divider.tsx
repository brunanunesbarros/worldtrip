import { Flex, Divider } from "@chakra-ui/react";

export function DividerDescription() {
    return (
        <Flex mt={["2rem","4rem"]} mb={["2rem","4rem"]} justifyContent="center">
            <Divider
                borderColor="dark.black"
                borderBottomWidth={["1px","2px"]}
                width="4rem"
            />
        </Flex>
    );
}
