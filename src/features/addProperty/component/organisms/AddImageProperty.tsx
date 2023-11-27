import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  useToken,
} from '@chakra-ui/react';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import {
  FaCamera,
  FaChevronRight,
  FaCloudUploadAlt,
  FaTrash,
} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

interface AddImagePropertyProps {}

const AddImageProperty: React.FC<AddImagePropertyProps> = () => {
  const [images, setImages] = React.useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImages((prev) => [...prev, ...acceptedFiles]);
    },
  });
  const removeFile = (file: File) => () => {
    const newFiles = [...images];
    newFiles.splice(newFiles.indexOf(file), 1);
    setImages(newFiles);
  };

  const removeAll = () => {
    setImages([]);
  };

  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);

  return (
    <VStack w="full" gap={4} alignItems="flex-end">
      <Center w="full" h="250" bg="blue.50" {...getRootProps()} rounded="lg">
        <VStack>
          <input {...getInputProps()} />
          <Icon as={FaCloudUploadAlt} w={75} h={75} color="blue.500" />
          <Text>
            Seret & lepas files atau <Link color="blue.500">Telusuri</Link>
          </Text>
          <Text fontSize="sm" color="gray.500">
            Format yang didukung: JPEG, PNG
          </Text>
        </VStack>
      </Center>
      {images.length > 0 && (
        <VStack w="full" alignItems="flex-start" gap={2}>
          <HStack justifyContent="space-between" w="full">
            <HStack>
              <Icon as={FaCamera} w={6} h={6} color="gray.500" />
              <Text>{images.length} Foto terunggah</Text>
            </HStack>
            <Button
              colorScheme="red"
              variant="outline"
              leftIcon={<FaTrash />}
              onClick={removeAll}
            >
              Hapus semua foto
            </Button>
          </HStack>
          <SimpleGrid columns={5} spacing={4} w="full">
            {images.map((file) => (
              <Box
                key={file.name}
                h="180"
                w="full"
                rounded="lg"
                overflow="hidden"
                position={'relative'}
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
                <IconButton
                  onClick={removeFile(file)}
                  colorScheme="red"
                  position={'absolute'}
                  top={0}
                  right={0}
                  variant="solid"
                  icon={<IoClose />}
                  aria-label="delete photo"
                />
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      )}
      <Alert status="warning" rounded="lg">
        <AlertIcon />
        Anda dapat mengunggah maximal 5 foto properti dan gunakan file dalam
        bentuk jpg dan jpeg
      </Alert>
      <Button
        bg="gray.800"
        color="white"
        _hover={{ backgroundColor: gray900, shadow: shadow }}
        rightIcon={<FaChevronRight />}
      >
        Tahap selanjutnya
      </Button>
    </VStack>
  );
};

export default AddImageProperty;
