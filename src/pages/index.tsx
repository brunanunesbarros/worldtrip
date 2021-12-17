import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";

import Carrousel from '../components/Carrousel'
import { Description } from "../components/Description";
import { DividerDescription } from "../components/Divider";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

export default function Home() {
    return (
        <Flex maxWidth="100vw" minHeight="100vh" flexDirection="column">
            <Header />
            <Banner />
            <Services />
            <DividerDescription />
            <Description />
            <Carrousel />
        </Flex>
    );
}
