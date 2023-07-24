import { Container, Ul } from './App.styled';
import Title from './Title/Title';
import Form from './Form/Form';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Container>
      <Title text="Phonebook"></Title>
      <Form />
      <Title text="Contacts"></Title>
      <Filter />
      <Ul>
        <Contact />
      </Ul>
    </Container>
  );
};

export default App;
