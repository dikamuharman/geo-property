import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Switch,
    Text,
    useToast,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import searchService from "../features/searchProperty/service/searchService";
import { create } from "zustand";

interface HomePageProps { }

type TOptionType = {
    value: number[];
    prompt: string;
};

const HomePage: FC<HomePageProps> = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const { control, handleSubmit, getValues } = useForm<TOptionType>({
        defaultValues: {
            value: [0],
            prompt: "",
        },
    });
    const [isChecked, setIsChecked] = useState(false);

    const onSubmit = (data: TOptionType) => {
        if (isChecked) {
            navigate(`/search?prompt=${data.prompt}`);
        } else {
            navigate(`/search?lat=${data.value[0]}&lng=${data.value[1]}`);
        }
    };

    const loadOptions = (inputValue: string) => {
        return new Promise((resolve) => {
            const result = searchService.searchProperty(inputValue).then((res) => {
                return res.data?.map((item) => ({
                    label: item.name,
                    value: item.center_point,
                }));
            });
            resolve(result);
        });
    };

    const switchAiMode = (e: any) => {
        if (e.target.checked) {
            setIsChecked(true)
            localStorage.setItem('isAiChecked', true)
            toast({
                title: "GeoRobot Aktif",
                description: "Pencarian properti dengan Georobot telah aktif ",
                status: "info",
                duration: 1200,
                position: "bottom-right",
            })
        } else {
            setIsChecked(false)
            localStorage.setItem('isAiChecked', false)
        }
        console.log(isChecked);
    }

    return (
        <Flex alignItems="center" h="100%">
            <Stack direction="column" gap="4">
                <Image
                    src={HeroImage}
                    w={600}
                    position="absolute"
                    right={0}
                    bottom={0}
                />
                <Box>
                    <Heading
                        size="4xl"
                        color="white"
                        as="h1"
                        lineHeight="140%"
                        fontWeight="bold"
                    >
                        Kisah Sukses Properti
                        <br />
                        Anda Akan Dimulai Disini
                    </Heading>
                    <Text color="white" fontSize="2xl">
                        Beli, sewa, dan jual properti anda di GeoProperti
                    </Text>
                </Box>

                <Box bg="white" borderRadius="xl" px="6" pb="10" pt="6" marginBottom="-9" maxWidth="fit-content">
                    <FormControl display='flex' alignItems='center' justifyContent="space-between">
                        <FormLabel htmlFor='enable-AI' mb='0'>
                            Temukan opsi properti terbaik, ideal dan efisien menggunakan GeoRobot
                        </FormLabel>
                        <BsStars color="blue" />
                        <Switch id='enable-AI' marginLeft="10" onChange={switchAiMode} />
                    </FormControl>
                </Box>
                {!isChecked ?
                    <Box bg="white" borderRadius="xl" p="7">
                        <HStack as={"form"} onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="value"
                                control={control}
                                render={({ field }) => (
                                    <CustomSelect
                                        options={[]}
                                        placeholder="Masukan lokasi (Khusus daerah depok)"
                                        onChange={(value) => {
                                            field.onChange(value);
                                        }}
                                        isClearable
                                        optionsIcon={FaMapMarkerAlt}
                                        dropdownIndicator={FaSearch}
                                        loadOptions={loadOptions}
                                    />
                                )}
                            />

                            <Button colorScheme="blue" size="lg" type="submit">
                                Cari properti
                            </Button>
                        </HStack>
                        <Text color="blue.500">*khusus daerah kota depok</Text>
                    </Box>
                    :
                    <Box bg="white" borderRadius="xl" p="7">
                        <HStack as={"form"} onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="prompt"
                                control={control}
                                render={({ field }) => (
                                    <InputGroup>
                                        <InputRightElement
                                            pointerEvents="none"
                                            children={<BsStars />}>
                                        </InputRightElement>
                                        <Input
                                            placeholder="Carikan saya rumah menghadap utara dengan dibawah harga 150 juta"
                                            onChange={(value) => {
                                                field.onChange(value)
                                            }}
                                        />
                                    </InputGroup>
                                )}

                            />

                            <Button colorScheme="blue" size="lg" type="submit">
                                Cari properti
                            </Button>
                        </HStack>
                        <Text color="blue.500">*khusus daerah kota depok</Text>
                    </Box>
                }


            </Stack>
        </Flex >
    );
};

export default HomePage;
