import { Flex, Center, Img, Icon, Container } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";

export function Header() {
    const router = useRouter();
    return (
        <Container maxW="container.lg">
            {router.query.slug ? (
                <Center h={["50px","100px"]} w={["100%"]}>
                    <Flex w="100%">
                        <Link href="/" passHref>
                            <a>
                                <Icon as={IoIosArrowBack} />
                            </a>
                        </Link>
                    </Flex>

                    <Flex position="absolute" align="center">
                        <Img w={["100px", "200px"]} src="/images/Logo.png" alt="logo" />
                    </Flex>
                </Center>
                
            ) : (
                <Center alignSelf="center" h={["70px", "100px"]}>
                    <Img w={["100px", "200px"]} src="/images/Logo.png" alt="logo" />
                </Center>
            )}
        </Container>
    );
}
