// import React from 'react';
// import PropTypes from 'prop-types';

// const Page = ({props = 10}) => {
//     return (
//         <div>
//             props 的默认值：{props}
//         </div>
//     );
// };

// Page.propTypes = {
    
// };

// export default Page;

import React, { Component } from 'react';

class Page extends Component {
    static defaultProps = { // 设置props默认值
        page: 10
    }
    render() {
        return (
            <div>
                props 的默认值：{this.props.page}
            </div>
        );
    }
}

export default Page;