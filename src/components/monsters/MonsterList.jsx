import React from 'react';
import PropTypes from 'prop-types';
import Monster from './Monster';

const MonsterList = ({ monsters }) => {
    const monsterElements = monsters.map(monster => (
        <li key={monster.id}>
            {/* <Link to={`/details/${monsters.id}`}> */}
            < Monster {...monster} />
            {/* </Link> */}
        </li>
    ));

    return (
        <ul>
            {monsterElements}
        </ul>
    );
};

MonsterList.propTypes = {
    monsters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img_main: PropTypes.string.isRequired
    })).isRequired
};

export default MonsterList;
