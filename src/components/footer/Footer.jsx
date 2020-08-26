import React, { useState } from 'react'

import { cnpjMask, cepMask, telMask, getDate, getTime } from '../utils/Mask'
import { validarCNPJ } from '../utils/Validators'

export default props => {

    //States
    const [phone, setPhone] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [cep, setCep] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [estado, setEstado] = useState('');


    //Verifica o campo de CNPJ para validação
    function verificaCNPJ(cnpj) {
        if (cnpj.length < 19) {
            cnpj = cnpj.replace(/[^\d]+/g, '');
            if (cnpj.length === 14) {
                if (!validarCNPJ(cnpj)) {
                    alert('CNPJ inválido!');
                }
            }
        }
    }

    //Verifica o campo de CEP para realizar a busca
    function verificaCep(cep) {
        if (cep.length <= 9) {
            cep = cep.replace(/[^\d]+/g, '');
            if (cep.length === 8) {
                getCep(cep);
            }
        }
    }

    //Busca o cep no VIACEP
    async function getCep(cep) {
        let url = 'https://viacep.com.br/ws/' + cep + '/json/';
        const response = await fetch(url);
        const json = await response.json();
        respJson(json);
    }

    //Resposta do JSON
    function respJson(json) {
        if (json.erro !== true) {
            //setBairro(json.bairro);
            setMunicipio(json.localidade);
            //setLogradouro(json.logradouro);
            setEstado(json.uf);
        }
        else {
            //setBairro('');
            setMunicipio('');
            //setLogradouro('');
            setEstado('');
        }
    }


    return (
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Form</h5>
                    <ul>
                        <li>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">phone</i>
                                            <input type="tel" className="validate" placeholder="Phone" value={phone} required onChange={e => setPhone(telMask(e.target.value))} />
                                            <label htmlFor="icon_telephone">Phone</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">confirmation_number</i>
                                            <input type="text" placeholder="CNPJ" value={cnpj} required onChange={e => setCNPJ(cnpjMask(e.target.value), verificaCNPJ(e.target.value))} />
                                            <label htmlFor="icon_confirmation_number">CNPJ</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">add_location</i>
                                            <input type="text" placeholder="CEP" value={cep} required onChange={e => setCep(cepMask(e.target.value), verificaCep(e.target.value))} />
                                            <label htmlFor="icon_add_location">CEP</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">business</i>
                                            <input
                                                type="text"
                                                placeholder="Município - UF"
                                                value={municipio + " - " + estado}
                                                readOnly
                                                disabled
                                            />
                                            <label htmlFor="icon_business">Município - UF</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">av_timer</i>
                                            <input type="text"
                                                value={getDate() + " - " + getTime()}
                                                readOnly
                                                disabled />
                                            <label htmlFor="icon_av_timer">NOW</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}