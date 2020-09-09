import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css'

function SearchForm () {
    const history = useHistory();

    const [ageRange, setAgeRange] = useState("");
    const [healthInsurance, setHealthInsurance] = useState("");
    const [salary, setSalary] = useState("");
    const [why, setWhy] = useState("");

    function handleForm(e: FormEvent) {
        e.preventDefault();

        api.post('/form', {
            ageRange,
            healthInsurance,
            salary,
            why
        }).then(() => {
            alert('Pesquisa realizada com sucesso!')
            history.push('/')
        }).catch(() => {
            alert('Erro na pesquisa.')
        })
    }
    
    return (
        <div className="form-wrapper">
            <PageHeader />

            <main>
                <form onSubmit={handleForm}>
                    <fieldset>
                        <legend>Qual sua faixa de idade?</legend>

                        <Select 
                            name="ageRange" 
                            label="Faixa Etária"
                            value={ageRange}
                            onChange={(e) => { setAgeRange(e.target.value) }}
                            options={[
                                { value: 'Até 30 anos', label: 'Até 30 anos' },
                                { value: 'De 30 a 50 anos', label: 'De 30 a 50 anos' },
                                { value: 'De 50 a 65 anos', label: 'De 50 a 65 anos' },
                                { value: 'Acima de 65 anos', label: 'Acima de 65 anos' },
                            ]}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Qual seu convênio?</legend>

                        <Select 
                            name="healthInsurance" 
                            label="Convênio"
                            value={healthInsurance}
                            onChange={(e) => { setHealthInsurance(e.target.value) }}
                            options={[
                                { value: 'INSS', label: 'INSS' },
                                { value: 'SIAPE', label: 'SIAPE' },
                                { value: 'Forças Armadas', label: 'Forças Armadas' },
                                { value: 'Outros', label: 'Outros' },
                            ]}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Qual sua faixa salarial?</legend>

                        <Select 
                            name="salary" 
                            label="Salário"
                            value={salary}
                            onChange={(e) => { setSalary(e.target.value) }}
                            options={[
                                { value: 'Até 2 SM', label: 'Até 2 SM' },
                                { value: 'De 2 a 4 SM', label: 'De 2 a 4 SM' },
                                { value: 'De 4 a 6 SM', label: 'De 4 a 6 SM' },
                                { value: 'Acima de 6 SM', label: 'Acima de 6 SM' },
                            ]}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Por que você realizou o empréstimo?</legend>

                        <Select 
                            name="why" 
                            label="Porque"
                            value={why}
                            onChange={(e) => { setWhy(e.target.value) }}
                            options={[
                                { value: 'Pagar contas', label: 'Pagar contas' },
                                { value: 'Reforma da Casa', label: 'Reforma da Casa' },
                                { value: 'Compra de Carro', label: 'Compra de Carro' },
                                { value: 'Outras', label: 'Outras' },
                            ]}
                        />
                    </fieldset>

                    <button className="buttonForm" type="submit">
                        Salvar
                    </button>
                </form>
            </main>
        </div> 
    )
}

export default SearchForm;