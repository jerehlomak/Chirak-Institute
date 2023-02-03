import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const menu = (
  <Menu
    className='bg-red-300 flex '
    items={[
      {
        key: "sub",
        label: "sub menu",
        children: [
          {
            key: "3",
            label: "3rd menu item",
          },
          {
            key: "4",
            label: "4th menu item",
          },
        ],
      },
    ]}
  />
);

const AntDropDown = () => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className='bg-white'>
            Cascading menu
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default AntDropDown;
