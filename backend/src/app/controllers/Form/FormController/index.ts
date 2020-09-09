import { Response } from 'express';
import Form from '../../../schemas/Form'
import { RequestForm, RequestFormShow, RequestParamsShow} from './types'

class FormController {
    async index(req: RequestForm, res: Response) {
        const form = await Form.find({});
        return res.json(form);
    }

    async show(req: RequestFormShow, res: Response) {
        // const {names} = req.query;
        const names = [

               {
                  "ageRange":[
                                  "Até 30 anos",
                     "De 30 a 50 anos",
                               "De 50 a 65 anos",
                     "Acima de 65 anos"
                  ]
               },
               {
                  "healthInsurance":[
                                  "INSS",
                     "SIAPE",
                               "Forças Armadas",
                               "Outros"
                  ]
               },
               {
                  "salary":[
                     "Até 2 SM",
                               "De 2 a 4 SM",
                               "De 4 a 6 SM",
                               "Acima de 6 SM"
                  ]
               },
                   {
                        "why": [
                                  "Pagar contas",
                                  "Reforma da Casa",
                               "Compra de Carro",
                               "Outras"
                          ]
                     }
        ]
        const results = {};

        for (let i=0; i<names.length; i++) {
            const key = Object.keys(names[i]);
            
            results[key[0]] = results[key[0]] || [];
            for (let k = 0; k < names[i][key[0]].length; k++){
                const query = ({[`${key[0]}`]: names[i][key[0]][k]});
                results[key[0]].push(({ [`${names[i][key[0]][k]}`]: await Form.find(query).countDocuments() }));
            }     
        }
        return res.json(results);
    }

    async store(req: RequestForm, res: Response) {
        const form = await Form.create(req.body);

        return res.json(form);
    } 
}
export default new FormController();
