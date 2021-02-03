import React, { Component } from 'react';
import { getMonsters } from '../../services/monsterFetches';
import MonsterList from './MonsterList';

export default class AllMonsters extends Component {
    state = {
        monsters: []
    }

    componentDidMount = async () => {
        const monsters = await getMonsters();
        await this.setState({ monsters: monsters.results });
        console.log(monsters);
    };

    render() {
        const { monsters } = this.state;
        console.log(this.state.monsters)

        return (
            <MonsterList monsters={monsters} />
        );
    }
}
