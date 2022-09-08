import { Component } from "react";
import { GlobalStyle } from "GlobalStyle";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Section } from "./Section/Section";



export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleOnSubmit = (data) => {
    data.id = nanoid(4);
    // console.log(data);

    const findName = this.state.contacts.find(contact => contact.name === data.name.trim());
    if (!findName) {
      this.setState(({contacts}) => ({
      contacts: [data, ...contacts]
    }));
    // console.log(this.state.contacts);
    } else {
      return alert(`${findName.name} is already in contacts.`);
    };  
  };

  handleFilterChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  filterContactList = () => {
    const { contacts, filter } = this.state;
    const validFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(validFilter)
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };


  render() {

    return (
      <>
        <Section title="Notebook">
          <ContactForm onSubmit={this.handleOnSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter filterValue={this.state.filter} onChange={ this.handleFilterChange } />
          <ContactList  filtered={this.filterContactList()} onDelete={this.handleDeleteContact}/>
        </Section>
        <GlobalStyle />
      </>
    );
  }
  
};
