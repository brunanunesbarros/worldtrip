import { Text, Flex, Heading } from "@chakra-ui/react";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"

export default function Carrousel() {
    return (
      <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >

              <SwiperSlide>
                <Flex
                 w="100%"
                 h="100%"
                 align="center"
                 justify="center"
                 direction="column"
                 bgSize="cover"
                 bgRepeat="no-repeat"
                 bgPosition="center"
                 bgImage="url(/images/europe.png)"
                >
                  <Heading fontSize={["24px","48px"]} lineHeight={["36px","72px"]} color="light.headingsAndText" fontWeight="700" mb="1rem">Europa</Heading>
                  <Text color="light.info" fontWeight="700">O continente mais antigo.</Text>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                <Flex
                 w="100%"
                 h="100%"
                 align="center"
                 justify="center"
                 direction="column"
                 bgImage="url(/images/europe.png)"
                >
                  <Heading fontSize="4rem" color="light.headingsAndText" fontWeight="700" mb="1rem">Europa</Heading>
                  <Text color="light.info" fontWeight="700">O continente mais antigo do mundo.</Text>
                </Flex>
              </SwiperSlide>
            </Swiper>
          </Flex>
    );
}
