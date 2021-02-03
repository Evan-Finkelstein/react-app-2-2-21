import React, { Component } from 'react';
import { getMonster } from '../../services/monsterFetches';

export default class MonsterDetails extends Component {
    state = {
        monster: []
    }

    componentDidMount = async () => {
        const monster = await getMonster(this.props.match.params.id);
        await this.setState({ monster: monster.results[0] });
        console.log(monster);
    };

    render() {
        const { monster } = this.state;
        console.log(this.state.monsters)

        return (
            <div>
                <figure>
                    <figcaption>{monster.name}</figcaption>
                    <figcaption>AC:{monster.armor_class}</figcaption>
                    <figcaption>Health:{monster.hit_points}</figcaption>
                    <figcaption>Challenge Rating:{monster.challenge_rating}</figcaption>

                </figure>
            </div>
        );
    }
}
