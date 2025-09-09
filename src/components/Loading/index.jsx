import clsx from "clsx";

import styles from './Loading.module.scss'
import loading from '../../assets/loading.svg'

function Loading() {
    return ( 
        <div className={clsx(styles.loading)}>
            <img src={loading} alt= "Loading" />
        </div>
     );
}

export default Loading;