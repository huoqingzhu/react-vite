import { MailOutlined } from '@ant-design/icons';
import React,{ lazy} from 'react';
const icon=<MailOutlined></MailOutlined>
const week= {
  path: "/home/week",
  name: "week",
  sort:3,
  component: lazy(()=>import("../../view/week/index")),
  meta: {
    auth: true,
    title: "week",
    iocn: icon,
    keepAlive: true
  },
  iocn: icon,
}
export default week