import React, { useState } from "react";
import { db } from "../config";
import {
  Button,
  Container,
  Box,
  Center,
  Textarea,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Switch,
  FormLabel,
  Radio,
  RadioGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  useNumberInput,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [table, setTable] = React.useState(false);
  const [rest, setRest] = React.useState("2");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const [loader, setLoader] = useState(false);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: 1,
      min: 1,
      max: 12,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("bookings")
      .add({
        i0people: people,
        i1date: startDate,
        i2time: time,
        i3terrace: table,
        i4rest: rest,
        i5name: name,
        i6surname: surname,
        i7email: email,
        i8phone: phone,
        i9message: message,
      })
      .then(() => {
        alert("Message has been submitted");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setPeople("");
    setDate("");
    setTime("");
    setRest("");
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setMessage("");
    setStartDate("");
  };

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit}>
        <Center>
          <h1>Book a table</h1>
        </Center>

        <Center my={4}>
          <label>Number of people</label>
        </Center>
        <Center my={4}>
          <HStack maxW="320px">
            <Button {...dec} colorScheme="green">
              -
            </Button>
            <Input {...input} />
            <Button {...inc} colorScheme="green">
              +
            </Button>
          </HStack>
        </Center>

        <Center my={4}>
          <label>Select a date</label>
        </Center>
        <Box border="1px" borderColor="gray.200">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
          />
        </Box>
        <Center my={4}>
          <label>Time</label>
        </Center>
        <Select
          placeholder="Select an hour"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option disabled value="Dinars">
            Dinars
          </option>
          <option value="12:30">12:30</option>
          <option value="12:45">12:45</option>
          <option value="13:00">13:00</option>
          <option value="13:15">13:15</option>
          <option value="13:30">13:30</option>
          <option value="13:45">13:45</option>
          <option value="14:00">14:00</option>
          <option value="14:15">14:15</option>
          <option value="14:30">14:30</option>
          <option value="14:45">14:45</option>
          <option value="15:00">15:00</option>
          <option value="15:15">15:15</option>
          <option value="15:30">15:30</option>
          <option value="15:45">15:45</option>
          <option value="16:00">16:00</option>
          <option value="16:15">16:15</option>
          <option value="16:30">16:30</option>
          <option disabled value="Sopars">
            Sopars
          </option>
          <option value="19:00">19:00</option>
          <option value="19:15">19:15</option>
          <option value="19:30">19:30</option>
          <option value="19:45">19:45</option>
          <option value="20:00">20:00</option>
          <option value="20:15">20:15</option>
          <option value="20:30">20:30</option>
          <option value="20:45">20:45</option>
          <option value="21:00">21:00</option>
          <option value="21:15">21:15</option>
          <option value="21:30">21:30</option>
          <option value="21:45">21:45</option>
          <option value="22:00">22:00</option>
          <option value="22:15">22:15</option>
          <option value="22:30">22:30</option>
        </Select>

        <Center mt={4}>
          <label>Table preference</label>
        </Center>
        <Center mt={1}>
          <FormLabel htmlFor="terracePref" mb="0">
            Would you like to sit in our terrace?
          </FormLabel>
          <Switch
            id="terracePref"
            onChange={() => setTable(!table)}
            value={table}
          />
        </Center>

        <Center mt={4}>
          <label>Select one of our restaurants</label>
        </Center>
        <Center mt={1}>
          <RadioGroup onChange={setRest} value={rest}>
            <Radio value="Jazz">Jazz Café</Radio>
            <br />
            <Radio value="Piano">Piano Bar</Radio>
            <br />
          </RadioGroup>
        </Center>

        <Center mt={6}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Center>

        <Center my={4}>
          <Input
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Center>

        <Center my={4}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Center>

        <InputGroup my={4}>
          <InputLeftAddon children="+" />
          <Input
            type="tel"
            placeholder="Mobile phone (indicate your prefix)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputGroup>

        <Center my={4}>
          <label>Message</label>
        </Center>

        <Center my={4}>
          <Textarea
            placeholder="Observacions"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Center>
        <ModalTC my={4}></ModalTC>

        <Center my={4}>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Center>
      </form>
    </Container>
  );
};

function ModalTC() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center>
        <Button onClick={onOpen} colorScheme="green">
          Read T&C
        </Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            assumenda nihil eaque architecto, tempore molestias illo optio ullam
            nam, atque eius accusamus quas eveniet culpa minus eligendi quis
            natus quos!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Contact;
