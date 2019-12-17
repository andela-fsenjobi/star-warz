import React from 'react';

const CharacterList = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td><button>Name</button></td>
                    <td><button>Gender</button></td>
                    <td><button>Height</button></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Obi Wan Ken-Obi</td>
                    <td>Male</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Obi Wan Ken-Obi</td>
                    <td>Male</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Obi Wan Ken-Obi</td>
                    <td>Male</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Obi Wan Ken-Obi</td>
                    <td>Male</td>
                    <td>50</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td>170cm (50ft/11iches)</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default CharacterList;
