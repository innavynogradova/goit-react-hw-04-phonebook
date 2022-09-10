import PropTypes from 'prop-types';
import { ListItem, Button } from 'components/ContactList/ContactList.styled';


export const ContactListItem = ({contact, onDelete}) => {
    const {id, name, number} = contact;
    return (
        <ListItem>
            <span>{name}</span>
            <span>{number}</span> 
            <Button type="button" onClick={() => { onDelete(id) }}>Delete</Button>
        </ListItem>
    )
    
}

ContactListItem.prototype = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};
                    