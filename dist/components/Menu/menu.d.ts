import React, { FC, CSSProperties } from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    /**默认 active 的菜单项的索引值，表示高亮 */
    defaultIndex?: string;
    /**用户自定义的菜单属性 */
    className?: string;
    /**菜单类型 横向或者纵向 */
    mode?: MenuMode;
    style?: CSSProperties;
    /**点击菜单项触发的回掉函数，添加自定义的逻辑 */
    onSelect?: (selectedIndex: string) => void;
    /**设置子菜单的默认打开 只在纵向模式下生效 */
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ~~~js
 * import { Menu } from 'wjf_comp_lib'
 * //然后可以使用 Menu.Item 和 Menu.Submenu 访问选项和子下拉菜单组件
 * ~~~
 */
export declare const Menu: FC<MenuProps>;
export default Menu;
