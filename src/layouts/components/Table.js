
import classNames from "classnames/bind";
import styles from '../../css/Table.module.scss'

const cx = classNames.bind(styles)

function Table({ listHead, children }) {
    return (
        <table>
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
            {children}

        </table>
    );
}

export default Table;