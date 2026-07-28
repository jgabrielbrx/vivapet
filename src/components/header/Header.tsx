"use client"

import Link from "next/link";
import "../Header/Header.css";

export default function Header() {
    return (
        <header className="header">

            <div className="header-container">

                <div className="logo">
                    <Link href="/">VivaPet</Link>
                </div>

                <nav className="menu">

                    <div className="menu-item">
                        <span>Animais</span>

                        <div className="submenu">
                            <Link href={"/animais/cadastrar"}>Cadastrar um animal novo</Link>
                            <Link href={"/animais/necessidades"}>Cadastrar necessidades do animal</Link>
                        </div>

                    </div>

                    <div className="menu-item">
                        <span>Cuidadores</span>

                        <div className="submenu">
                            <Link href={"/cuidadores/cadastrar"}>Cadastrar um cuidador novo</Link>
                            <Link href={"/cuidadores/vincular"}>Vincular cuidador</Link>
                        </div>

                    </div>

                    <div className="menu-item">
                        <span>Suprimentos</span>

                        <div className="submenu">
                            <Link href={"/suprimentos/cadastrar"}>Cadastrar suprimentos</Link>
                            <Link href={"/suprimentos/checar"}>Checar suprimentos</Link>
                        </div>

                    </div>

                </nav>

                <div className="donations">
                    <Link href={"/doacoes"}>Doações</Link>
                </div>
            </div>

        </header >
    )
}