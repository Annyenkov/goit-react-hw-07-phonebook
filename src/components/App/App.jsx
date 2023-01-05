import Filter from "components/Filter";
import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import { Div } from "./App.styled";

const App = () => {
  
  return (
    <Div>
      <h2>Phonebook</h2>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Div>
  )
}

export default App;

