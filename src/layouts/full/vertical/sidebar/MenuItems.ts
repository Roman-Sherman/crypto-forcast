import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconHome,
  IconChartAreaLine,
  IconAperture
} from '@tabler/icons';

const Menuitems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconHome,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Prediction',
    icon: IconChartAreaLine,
    href: '/prediction',
  },
  {
    id: uniqueId(),
    title: 'Portfolio',
    icon: IconAperture,
    href: '/portfolio',
  },
];

export default Menuitems;
