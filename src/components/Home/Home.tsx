import AcoesRapidas from "../Home/AcoesRapidas/AcoesRapidas";
import BoasVindas from "../Home/BoasVindas/BoasVindas";
import CartaoDashboard from "../Home/CartaoDashboard/CartaoDashboard";

import "../Home/Home.css"
import UltimasAtividades from "../Home/UltimasAtividades/UltimasAtividades";

export default function Home(){

    return(

        <div>

            <main className="home">

            <BoasVindas />


            
                <section className="grade-cartoes">



                    <CartaoDashboard titulo="Animais" valor={38} />

                    <CartaoDashboard titulo="Cuidadores" valor={12} />

                    <CartaoDashboard titulo="Suprimentos" valor={87} />

                    <CartaoDashboard titulo="Necessidades" valor={6} />



                </section>



                <AcoesRapidas />

                <UltimasAtividades />

            </main>

        </div>
    );
}