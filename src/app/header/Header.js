import Link from "next/link";
import NavBar from "../components/navbar";
import TopBar from "../components/topbar";
import { getMenus } from "../lib/menus";

export default async function Header() {
    const menus = await getMenus();

    return (
        <>
            <NavBar menus={menus} />
            <TopBar />
        </>

    )
  }