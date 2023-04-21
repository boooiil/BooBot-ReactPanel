import { Component } from "react";
import { Guild } from "lib/BooBot/classes/Guild";

export default class ListGuildsTabular extends Component<{}, { guilds: Guild[] }> {

    constructor(props: any) {
        super(props);
        this.state = { guilds: [] };
    }

    componentDidMount() {
        fetch('http://localhost:45010/api/guilds')
            .then(response => response.json())
            .then(data => { return this.setState({ guilds: data }) });
    };

    redirect(url: string, id: string) {
        (window.location.href = url + id);
        return undefined;
    }

    printGuilds(): JSX.Element[] {
        return this.state.guilds.map((guild: Guild) => {

            return (
                <tr key={guild.id}>
                    <td>{guild.name}</td>
                    <td>{guild.id}</td>
                    <td><button onClick={() => this.redirect('/view/', guild.id)}>View</button></td>
                    <td><button onClick={() => this.redirect('/modify/', guild.id)}>Modify</button></td>
                    <td><button onClick={() => this.redirect('/delete/', guild.id)}>Delete</button></td>
                </tr>
            )

        });
    }


    render() {

        return (

            <table>
                <thead>
                    <tr>
                        <th>Guild Name</th>
                        <th>Guild ID</th>
                        <th>View</th>
                        <th>Modify</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.printGuilds()}
                </tbody>
            </table>

        );
    }
}