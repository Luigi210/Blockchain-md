import React, {useState, useEffect, useCallback} from 'react';
import { Box, Flex, Center, FormControl, FormLabel, Input, FormHelperText, Button, Text, Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../store/basket/slice';
import { RootState } from '../store';
export interface IBook {
    id: string;
    accessInfo: IAccessInfo;
    saleInfo: ISaleInfo;
    searchInfo: {
        textSnippet: string;
    };
    volumeInfo: IVolumeInfo
}

interface IAccessInfo {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: {
        acsTokenLink: string;
        isAvailable: boolean;
    };
    pdf: {
        isAvailable: boolean;
    };
    webReaderLink: string;
}

interface ISaleInfo {
    buyLink: string;
    country: string;
    isEbook: boolean;
    listPrice: {
        amount: number;
        currencyCode: string;
    };
}

interface IVolumeInfo {
    authors: string[];
    averageRating: number;
    categories: string[];
    description: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    infoLink: string;
    pageCount: number;
    previewLink: string;
    publishedDate: string;
    publisher: string;
    subtitle: string;
    title: string;
}

const Books = () => {
    const haveBooks = useSelector((state: RootState) => state.basket)
    const dispatch = useDispatch();

    const [bookName, setBookName] = useState('');
    const [books, setBooks] = useState<IBook[]>([]);
    useEffect(() => {
        getBooks();
    }, [bookName]);

    const getBooks = useCallback(async () => {
        const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${'AIzaSyAAf0npRkw3SYfMjQXgVv7ON8fgfSthWV8'}`)
        const res = await data.json()
        setBooks([...res.items]);
    }, [bookName]);

    return <Box p={"0 120px"}>
        <Input
            type="text"
            onChange={(e) => setBookName(e.target.value)}
            placeholder={"Search book"}
        />
        <Flex 
            p={"50px 0"}
            gap={"35px"}
            overflowX={"scroll"}
        >
            {
                books.length && books.map((book) => <Box 
                    key={book.id}
                    minW={"250px"}
                    maxW={"300px"}
                >
                    <Flex justifyContent={"center"}>
                        <Image 
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            width={"150px"}
                            objectFit={"contain"}
                        />
                    </Flex>
                    <Box>
                        <Text fontWeight={"bold"}>{book.volumeInfo.title}</Text>
                        <Text fontSize={"14px"} maxH="200px" overflowY={"scroll"} textOverflow={"ellipsis"}>{book.volumeInfo.description}</Text>
                        <Text>{book.volumeInfo.authors?.map((author) => author).join(' ')}</Text>
                    </Box>
                    {haveBooks.find((hbook: IBook) => hbook.id === book.id) ? <Box>
                        <Text>Already in basket</Text>
                        <Button onClick={() => dispatch(removeFromBasket(book))}>Remove</Button>
                    </Box> : <Button
                        onClick={() => dispatch(addToBasket(book))}
                    >
                        Add to basket
                    </Button>}
                </Box>)
            }
        </Flex>
    </Box>
};

export default Books;