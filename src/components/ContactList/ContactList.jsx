import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ filtered, onDelete }) => {

    return (
        <List>
            {filtered.map(({ name, number, id }) => {
                return <ContactListItem key={id} contact={{ name, number, id }} onDelete={onDelete} />;   
            })}    
        </List>
    )
};

ContactList.prototype = {
    filtered: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};