import PropTypes from 'prop-types';
import clsx from 'clsx';


import styles from './Pagination.module.scss'
function Pagination({currentPage, totalPages, onPageChange}) {
    return ( 
        <div className={clsx(styles.pagination)}>
            <button className={clsx(styles.btn, currentPage === 1 && styles.disabled)}  onClick={() => onPageChange(1)}>First</button>
            <button className={clsx(styles.btn, currentPage === 1 && styles.disabled)}  onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}>Previous</button>
                <ul className={clsx(styles.pagenumwrapper)}>
                    {Array(totalPages).fill().map((_,index) => {
                        const pageNum = index + 1
                        return (
                                <li className={clsx(styles.pagenum, currentPage === pageNum && styles.active )} key={index} 
                                    onClick={() => onPageChange(pageNum)}
                                >
                                    {pageNum}
                                </li>
                        )
                    })}
                </ul>
                <button className={clsx(styles.btn, currentPage === 5 && styles.disabled)} onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}>Next</button>
                <button className={clsx(styles.btn, currentPage === 5 && styles.disabled)} onClick={() => onPageChange(5)}>Last</button>

                <select className={clsx(styles.select)} value={currentPage} onChange={e => onPageChange(Number(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
     );
}

Pagination.prototype = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func,
}

export default Pagination;