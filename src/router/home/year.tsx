import { MehOutlined } from '@ant-design/icons';
import React,{ lazy} from 'react';
const icon=<MehOutlined></MehOutlined>
const year= {
  path: "/home/year",
  name: "year",
  sort:4,
  component: lazy(()=>import("../../view/year/index")),
  meta: {
    auth: true,
    title: "year",
    iocn: icon,
    keepAlive: true
  },
  iocn: icon,
}
export default year