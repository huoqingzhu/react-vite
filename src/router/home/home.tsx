
import { BankOutlined } from '@ant-design/icons';
import React,{ lazy} from 'react';
const icon=<BankOutlined></BankOutlined>
console.log(icon)
const home=  {
  path: "/home/main",
  name: "首页",
  sort:1,
  component:lazy(()=>import("../../view/home/index")),
  meta: {
    auth: true,
    title: "首页",
    iocn: icon,
    keepAlive: true
  },
  iocn: icon,
}
export default home
