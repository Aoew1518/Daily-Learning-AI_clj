import React from 'react';
import { List, Tag } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

// 子组件
const TotoItem = (props) => {
  // 删除列表项
  const onClose = (e, index) => {
    e.preventDefault()
    // 触发父组件传递的删除回调函数，并传递要删除的索引
    props.onDelete(index);  
    // console.log(index);
  }

  return (
    <div>
      <List
        bordered
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item key={index}>
            {item}
            <Tag closeIcon={<CloseCircleOutlined />} onClose={(e) => onClose(e, index)} key={index}>
              删除
            </Tag>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;