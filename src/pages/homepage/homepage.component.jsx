import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
// functional component since we don't need lifecycle methods in here and store state
const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
)

export default HomePage;