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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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
import setDate from "date-fns/setDate";

const Contact = () => {
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [table, setTable] = useState("");
  const [rest, setRest] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("bookings")
      .add({
        people: people,
        date: date,
        time: time,
        table: table,
        rest: rest,
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        message: message,
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
    setTable("");
    setRest("");
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit}>
        <Center>
          <h1>Book a table</h1>
        </Center>
        <Center>
          <label>Number of people</label>
        </Center>
        <Center>
          <HookUsage></HookUsage>
        </Center>
        <Center>
          <label>Select a date</label>
        </Center>
        <Box border="1px" borderColor="gray.200">
          <Center>
            <PickerDate></PickerDate>
          </Center>
        </Box>
        <Center>
          <label>Time</label>
        </Center>
        <Select placeholder="Select an hour">
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
        <Center>
          <label>Table preference</label>
        </Center>
        <Center>
          <FormLabel htmlFor="terracePref" mb="0">
            Would you like to sit in our terrace?
          </FormLabel>
          <Switch id="terracePref" />
        </Center>
        <Center>
          <label>Select one of our restaurants</label>
        </Center>
        <Center>
          <RadioRestaurant></RadioRestaurant>
        </Center>
        <Center>
          <label>Name</label>
        </Center>
        <Center>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Center>
        <Center>
          <label>Surname</label>
        </Center>
        <Center>
          <Input
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Center>
        <Center>
          <label>Email</label>
        </Center>
        <Center>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Center>
        <Center>
          <label>Mobile phone</label>
        </Center>
        <Center>
          <small>Indicate your prefix</small>
        </Center>
        <InputGroup>
          <InputLeftAddon children="+" />
          <Input
            type="tel"
            placeholder="phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputGroup>
        <Center>
          <label>Message</label>
        </Center>
        <Center>
          <Textarea
            placeholder="Observacions"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Center>
        <BasicUsage></BasicUsage>
        <Center>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Center>
      </form>
    </Container>
  );
};

function RadioRestaurant() {
  const [rest, setRest] = React.useState("1");
  return (
    <RadioGroup onChange={setRest} value={rest}>
      <Radio value="Jazz">Jazz Café</Radio>
      <br />
      <Radio value="Piano">Piano Bar</Radio>
      <br />
    </RadioGroup>
  );
}

function BasicUsage() {
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

const PickerDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
    />
  );
};

function HookUsage() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: 1,
      min: 1,
      max: 12,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack maxW="320px">
      <Button {...dec} colorScheme="green">
        -
      </Button>
      <Input {...input} />
      <Button {...inc} colorScheme="green">
        +
      </Button>
    </HStack>
  );
}

export default Contact;
