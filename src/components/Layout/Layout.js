import React from 'react';

import Aux from '../../hoc/Auxiliary';
import styles from '../Layout/Layout.module.css'

const layout = (props) => (
    <Aux>
        <div>Tool bar, SideDrawer, BackDrop</div>
        <main className = {styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;