import React from 'react';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  Link,
  Icon,
  Avatar,
  Button
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const VideoCard = ({ title, length, href, children, ...rest }) => (
  <Link
    href={href}
    isExternal
    borderRadius={8}
    {...rest}
    _hover={{
      textDecoration: 'none',
      transform: 'scale(1.02)'
    }}
  >
    <Flex direction={['column', 'column', 'row']}>
      <Box
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.2)"
        borderRadius={8}
        w="250px"
        h="150px"
        mr={8}
        as="img"
        objectFit="cover"
        src="/video.jpg"
      />
      <Stack>
        <Heading
          letterSpacing="tight"
          as="h3"
          size="md"
          fontWeight="medium"
          mb={0}
          mt={[4, 4, 0]}
        >
          {title}
        </Heading>
        <Text color="gray.600" mb={2} fontSize="xs">
          {length}
        </Text>
        <Text color="gray.700" mb={2} fontSize="sm" maxW="300px">
          {children}
        </Text>
      </Stack>
    </Flex>
  </Link>
);

const Index = () => (
  <Box as="main">
    <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
      <Container>
        <Stack
          as="section"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m={['0 auto', null, '0 auto 4rem auto']}
          maxWidth="600px"
          p={8}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="600px"
          >
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="2xl"
              fontWeight="bold"
            >
              RENDY DWI PUTRA
              <Box>
                CHANNEL{' '}
                <Box display="inline" backgroundColor="#ff9cf9">
                  YOUTUBE
                </Box>
              </Box>
            </Heading>
            <Text color="gray.700" mb={4} fontSize="lg">
              Temukan keseruan dan ilmu yang tidak akan kalian dapatkan dimana pun,
              selain di CHANNEL YOUTUBE RENDY DWI PUTRA.
            </Text>
            <Button
              as="a"
              href="#course-overview"
              fontWeight="bold"
              h="2.5rem"
              mr={1}
              size="md"
              bg="gray.800"
              color="white"
              _hover={{ bg: 'black' }}
            >
              Jelajahi Channel youtube
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="600px"
        mt={[4, 8, 16]}
        p={8}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="600px"
        >
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h2"
            size="lg"
            fontWeight="bold"
          >
            SIAPA RENDY DWI PUTRA??
          </Heading>
          <Text color="gray.700" mb={4}>
            Hai semua!!! perkenalkan saya Rendy dwi putra. Saya anak kedua dari tiga bersaudara satu kakak perempuan dan satu adik perempuan.
            Saya lahir di Banyuwangi pada tanggal <b>16 April 2000</b>. 
            
          </Text>
          <Text color="gray.700" mb={4}>
            <b>-Pendidikan Yang Sudah di Tempuh Rendy : </b>
          </Text>
          <List spacing={2} mt={4}>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check"/>
              SDN 1 MOJOPANGGUNG
            </ListItem>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check"/>
              SMPN 1 GLAGAH
            </ListItem>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check"/>
              SMKN 1 GLAGAH
            </ListItem>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check" color/>
              STIKOM PGRI BANYUWANGI (SAAT INI)
            </ListItem>
          </List>
          <Divider borderColor="gray.200" my={16} w="100%" />
          <Heading
            letterSpacing="tight"
            mt={4}
            as="h2"
            size="lg"
            fontWeight="bold"
          >
            HOBBY..?
          </Heading>
          <Text color="gray.700" mt={4}>
            Berbeda dengan anak muda pada umumnya, hanya kebanyakan fokus dengan 1 hobi saja.
            saya tidak memiliki hobi yang tetap, saya tipe orang suka mencoba hal yang baru.
          </Text>
          <Text color="gray.700" mt={4}>
            dari hobi elektronika selanjutnya saya mencoba mempelajari elektronika audio, dan begitu seterusnya.
            lebih tepatnya saya suka mempelajari hal yang baru.
            jika saya ditanya, apa hobi kamu? Saya akan menjawab mempelajari hal yang baru.
          </Text>
          <List spacing={2} mt={4}>
          <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check"/>
              Electronics
            </ListItem>
          <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check"/>
              Electronic Goods Repair
            </ListItem>
          <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
          >
            <ListIcon icon="check"/>
            Photography
            </ListItem>
          <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check"/>
              Cinematic Video B-Roll
            </ListItem>
          <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check"/>
              Video Editing (saat ini!!)
            </ListItem>
            </List>
          <Divider borderColor="gray.200" my={16} w="100%" />
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h2"
            size="lg"
            fontWeight="bold"
            id="course-overview"
          >
            CHANNEL YOUTUBE
            </Heading>
          <Text color="gray.700" mt={4}>
            Kenapa aku membuat <b>CHANNEL YOUTUBE</b>?
            ini berhubungan dengan hobi aku saat ini, yaitu video editing.
             <b>YouTube</b> bagi aku sangat cocok untuk dijadikan tempat untuk menampilkan karya yang sudah aku buat.
            Aku juga berencana membuat konten tentang coading, tetapi aku belum terlalu mahir dalam hal coading.
            <Text color="gray.700" mt={4}>
            bagi kalian yang ingin belajar coading, aku saranin kalian ke Channel&nbsp;
            <Link
              isExternal
              fontWeight="bold"
              href="https://www.youtube.com/user/MaStaleee"
              textDecoration="none"
              borderBottom="2px solid #ff9cf9"
              transition="all 0.1s ease-in"
              _hover={{
                textDecoration: 'none',
                borderBottom: '2px solid #09DB1F'
              }}
            >
              LEE ROBINSHON
            </Link>
            &nbsp;kalian juga bisa mengunjungi&nbsp;
            <Link
              isExternal
              fontWeight="bold"
              href="https://leerob.io/"
              textDecoration="none"
              borderBottom="2px solid #ff9cf9"
              transition="all 0.1s ease-in"
              _hover={{
                textDecoration: 'none',
                borderBottom: '2px solid #09DB1F'
              }}
            >
              Websitenya.
            </Link>
            <Text color="gray.700" mt={4}>
             <b>RENDY DWI PUTRA CHANNEL YOUTUBE :</b> 
            </Text>
            </Text>
          </Text>
          <Stack mt={8} spacing={8}>
            <VideoCard
              title="# Vlog1 subuh-subuh servise mesin photo copy"
              length="1:44"
              href="https://www.youtube.com/watch?v=SIzAaIxdmsQ"
            >
              SUBSCRIBE!!!!!
            </VideoCard>
            <VideoCard
              title="Still Loving You-Scorpions | Fingerstyle guitar"
              length="03:38"
              href="https://www.youtube.com/watch?v=9D3WmP9HPMg"
            >
            SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="#VLOG​ NEW NORMAL - CINEMATIC VLOG"
              length="2:56"
              href="https://www.youtube.com/watch?v=D4Sja0Wlu8Y"
            >
              SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="SAINGAN GCAM..!! Hasil Foto Low Light Jadi Terang Dan No Nois - Tanpa Root"
              length="7:17"
              href="https://www.youtube.com/watch?v=eeCK1VpkDKU&t=78s"
            >
              SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="CINEMATIC ROOM TOUR | Shots With Sony Xz1"
              length="02:32"
              href="https://www.youtube.com/watch?v=8pHic8n0M9s"
            >
              SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="Hard Working Man | Cinematic Video | Meike 35mm f1.4"
              length="01:05"
              href="https://www.youtube.com/watch?v=_tU3FejbooY"
            >
           SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="Cara Membuat Foto Produk Yang Menarik | Hp Sony Xz1"
              length="12:12"
              href="https://www.youtube.com/watch?v=BRN1iIrJWwA"
            >
             SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="B Roll Of Car Care Products | Eos M100"
              length="00:22"
              href="https://www.youtube.com/watch?v=jtoapwA6zWo"
            >
              SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="Settingan Render Video Youtube Di Adobe Premiere Pro Agar Kualitas Tidak Menurun (Tutorial)"
              length="03:32"
              href="https://www.youtube.com/watch?v=LUOAp7ojkUA&t=42s"
            >
             SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="Cara Menambah Kapasitas RAM, Tanpa Harus Membeli RAM Lagi!! Laptop Berat Auto Ringan Kenceng!!"
              length="05:41"
              href="https://www.youtube.com/watch?v=BBIAMFZMQ9I"
            >
           SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="Aplikasi Kamera Analog Android - Tanpa Perlu Cuci Film"
              length="06:20"
              href="https://www.youtube.com/watch?v=DcetUo5UfpA&t=51s"
            >
              SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="Cara Mengatasi Windows 10/8/7 Yang Berat dan Lamban di Laptop 100% Work!!!"
              length="03:14"
              href="https://www.youtube.com/watch?v=EElGdRXo6_k&t=71s"
            >
              SUBSCRIBE!!!!
            </VideoCard>
            <VideoCard
              title="Solusi Driver AMD Radeon Adrenaline Yang Sering Bug & Problem"
              length="05:40"
              href="https://www.youtube.com/watch?v=pewNvtGmPIg&t=22s"
            >
              SUBSCRIBE!!!!
            </VideoCard>
          </Stack>
          <Divider borderColor="gray.200" my={8} w="100%" />
          <Subscribe />
          <Flex align="center">
            <Avatar
              size="lg"
              name="R"
              mr={4}
            />
            <Box>
              <Text color="gray.700" mt={4} fontSize={['sm', 'lg']}>
                <b>Aku Rendy Dwi Putra</b> –– entrepreneurs - students - content creators - novice programmer.
              </Text>
              <Link
                mt={2}
                isExternal
                href="https://www.facebook.com/profile.php?id=100049822935166"
                textDecoration="none"
                borderBottom="2px solid #ff9cf9"
                transition="all 0.1s ease-in"
                fontStyle="italic"
                fontSize={['sm', 'md']}
                _hover={{
                  textDecoration: 'none',
                  borderBottom: '2px solid #09DB1F'
                }}
              >
                more about me &#187;
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  </Box>
);

export default Index;
