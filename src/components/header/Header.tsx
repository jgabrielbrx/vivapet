"use client"

import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link href="/">VivaPet</Link>

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
                                <Link href={"/cuidadores/necessidades"}>Vincular cuidador</Link>
                            </div>

                        </div>

                        <div className="menu-item">
                            <span>Suprimentos</span>

                            <div className="submenu">
                                <Link href={"/suprimentos/cadastrar"}>Cadastrar suprimentos</Link>
                                <Link href={"/suprimentos/necessidades"}>Checar suprimentos</Link>
                            </div>

                        </div>


                            <div className="donations">
                                <Link href={"/doacoes"}>Doações</Link>
                            </div>

                    </nav>
                </div>
            </div>
        </header>
    )
}