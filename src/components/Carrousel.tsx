import { Text, Flex, Heading } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from 'next/link'

interface BannerProps {
    slug: string;
    uid: string;
    bannerUrl: string;
    name: string;
    description: string;
    alt: string;
}

interface CarrouselProps {
    banners: BannerProps[];
}

export default function Carrousel({ banners }: CarrouselProps) {
    return (
        <Flex
            w="100%"
            h={["250px", "450px"]}
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
        >
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                { banners && banners.map((banner) => {
                    return (
                        <SwiperSlide key={banner.uid}>
                            <Flex
                                w="100%"
                                h="100%"
                                align="center"
                                justify="center"
                                direction="column"
                                bgImage={`url('${banner.bannerUrl}')`}
                                bgSize="cover"
                                bgPosition="center"
                            >
                                <Link href={`/continent/${banner.slug}`} passHref>
                                    <Heading
                                        as="a"
                                        fontSize={["24px","48px"]}
                                        color="light.headingsAndText"
                                        fontWeight="700"
                                        lineHeight={["36px", "72px"]}
                                        mb="1rem"
                                    >
                                        {banner.name}
                                    </Heading>
                                </Link>
                                
                                <Text color="light.info" fontSize={["14px","24px"]} lineHeight={["21px","36px"]} fontWeight="700">
                                    {banner.description}
                                </Text>
                            </Flex>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Flex>
    );
}
