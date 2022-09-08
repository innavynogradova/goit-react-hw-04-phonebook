import PropTypes from 'prop-types';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { Label } from './Filter.styled';

export const Filter = ({onChange, filterValue }) => {
    return(
        <Label>Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filterValue}
                onChange={onChange}
            />
        </Label>
    );
};

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};