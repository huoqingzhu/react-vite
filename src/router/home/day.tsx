import {  AppstoreOutlined } from '@ant-design/icons';
import React,{lazy} from 'react';
const icon=<AppstoreOutlined></AppstoreOutlined>
const day=  {
  path: "/home/day",
  name: "大屏监控",
  sort:2,
  component:lazy(()=>import("../../view/day/index")),
  meta: {
    auth: true,
    title: "大屏监控",
    iocn: icon,
    keepAlive: true
  },
  iocn: icon,
}
export default day
