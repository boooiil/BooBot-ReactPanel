import { Component } from "react";
import { Guild } from "lib/BooBot/classes/Guild";
import Head from "components/generic/Head";
import IndividualizedGuildView from "./IndividualizedGuildView";

export default class ListGuildsTabular extends Component<{}, { guilds: Guild[] }> {

    guildIndex: number = -1;

    constructor(props: any) {
        super(props);
        this.state = { guilds: [] };
    }

    componentDidMount() {
        fetch('http://localhost:45010/api/guilds')
            .then(response => response.json())
            .then(data => { return this.setState({ guilds: data }) });
    };

    validateURLPath(): boolean {

        let path = window.location.pathname.split('/');
        if (path.length === 3 && path[1] === 'guilds') {
            let id = path[2];
            let index = this.state.guilds.findIndex((guild: Guild) => {
                return guild.id === id;
            });
            if (index !== -1) {
                this.guildIndex = index;
                return true;
            }
        }

        else {

            window.history.replaceState(null, "", "/");

        }

        return false;

    }

    redirect(index: number) {
        //TODO: RENAME THIS TO SOMETHING MORE APPROPRIATE
        this.guildIndex = index;
        window.history.replaceState(null, "", "/guilds/" + this.state.guilds[index].id);
        this.forceUpdate();
    }

    printGuilds(): JSX.Element[] {
        return this.state.guilds.map((guild: Guild, index: number) => {

            return (
                <tr key={guild.id}>
                    <td>{guild.name}</td>
                    <td>{guild.id}</td>
                    <td><button onClick={() => this.redirect(index)}>View</button></td>
                    <td><button onClick={() => this.redirect(index)}>Modify</button></td>
                    <td><button onClick={() => this.redirect(index)}>Delete</button></td>
                </tr>
            )

        });
    }

    render() {

        if (this.guildIndex !== -1 || this.validateURLPath()) {

            return (
                <div>
                    <Head title="Guild" />
                    <IndividualizedGuildView guild={this.state.guilds[this.guildIndex]} />
                </div>

            );
        }

        else {
            return (
                <div>
                    <Head title="Guilds" />
                    <table>
                        <tbody>
                            {this.printGuilds()}
                        </tbody>
                    </table>
                </div>
            );

        }

    }
}