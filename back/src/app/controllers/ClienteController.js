import * as Yup from "yup";
import Cliente from "../models/Cliente";

class ClienteController {
    async register (req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
            senha: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
            senhaConfirmation: Yup.string().when('senha', (senha, field) =>
                senha
                    ? field
                        .required('Confirmação de senha é obrigatória')
                        .oneOf([Yup.ref('senha')], 'As senhas devem coincidir')
                    : field
            ),
            saldo: Yup.number().min(0, 'Saldo não pode ser negativo'),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro na validação dos dados.' });
        }

        const { nome, email, senha, saldo } = req.body;

        const clienteExiste = await Cliente.findOne({ where: { email } });
        if (clienteExiste) {
            return res.status(400).json({ error: 'E-mail já cadastrado.' });
        }

        const { id, createdAt, updatedAt } = await Cliente.create({
            nome,
            email,
            senha,
            saldo,
        });

        return res.status(201).json({ id, nome, email, saldo, createdAt, updatedAt });
    }

    async me(req, res) {
        const cliente = await Cliente.findByPk(req.user_id, {
            attributes: ['id', 'nome', 'email', 'saldo'],
        });

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado.' });
        }

        return res.json(cliente);
    }
}

export default new ClienteController();