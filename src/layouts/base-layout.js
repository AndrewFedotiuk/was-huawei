import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => {

    return (
        <div>
            <Helmet
                title="Gatsby Default Starter"
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            />
            
            <div>{data.hello}</div>
        </div>
    );
};

export default Layout;