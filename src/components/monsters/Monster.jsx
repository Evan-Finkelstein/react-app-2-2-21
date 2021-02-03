import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Monster = ({ img_main, name, }) => (
    <figure>
        <Link to={`/details/${name}`}> <img src={img_main} /></Link>
        <figcaption>{name}</figcaption>
    </figure>
);

Monster.propTypes = {
    img_main: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Monster;
