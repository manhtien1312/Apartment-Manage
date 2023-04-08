
import classNames from "classnames/bind";
import styles from '../../css/Table.module.scss'

const cx = classNames.bind(styles)

function Table({ listHead, children }) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        listHead.map((head, index) => {
                            return (
                                <th key={index}>{head}</th>
                            )
                        })
                    }
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>


        </table>
    );
}

export default Table;