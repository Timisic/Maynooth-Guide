import { SidebarConfig4Multiple } from "vuepress/config";
import courseSideBar from "./sidebars/courseSideBar";
//import hideSideBar from "./sidebars/hideSideBar";
import outcourseSideBar from "./sidebars/outcourseSideBar";
import psySideBar from "./sidebars/psySideBar";
import studySideBar from "./sidebars/studySideBar";
// @ts-ignore
export default {
    "/升学规划/": studySideBar,
    "/心理学推荐/": psySideBar,
    "/课程外推荐/": outcourseSideBar,
    "/梅院课程/": courseSideBar,
    //"/隐藏版/": hideSideBar,
    // "/xx/":xxSideBar,
    
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
