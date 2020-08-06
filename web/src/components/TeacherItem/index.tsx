import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem(){
    return(<article className="teacher-item">
    <header>
        <img src="https://avatars2.githubusercontent.com/u/9783209?s=460&u=860883c4d009b4832dda95da7c5a08a5aabfd4db&v=4" />
        <div>
            <strong>Deborah Medeiros</strong>
            <span>Redes de computadores</span>
        </div>
    </header>
    <p>
        gosto de rackear facebooks e ver o que o povo tá fuçando na web enquanto deveria tá trabalhando
    </p>
    <footer>
        <p>
            Preço/hora
            <strong>80,00</strong>
        </p>
        <button type="button">
            <img src={whatsAppIcon} alt="whatsapp" />
            Entrar em contato
        </button>
    </footer>
</article>
);
}



export default TeacherItem;