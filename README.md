# Site e-commerce 
## Desenvolvido por grupo de estudos para desenvolver seus conhecimentos em HTML, CSS, JS e NodeJS usando o modelo gitflow de trabalho em equipe.

## Link da página do projeto: 
https://anikape.github.io/ecommerce/

### Features planejadas pelo back end:
1ª ETAPA - LOGIN
login JWT/autent por rede social (verificar junto ao BD e retornar ok)

2ª ETAPA - CADASTRO
cadastro (armazenar dados no BD)
verif de user existente (momento do cadastro realizar busca por cpf/cnpj existenteno BD)
perfil de usuário(edição/exclusão/inclusão) (alterar/excluir do BD)(add novos endereços ou cartões)

3ª ETAPA - INTERAÇÃO PRODUTOS/CONTA-CLIENTE
GET histórico vendas(buscar histórico de venda do usuário)
pedidos(buscar do BD pedidos em andamento ou realizados)
carrinho (registro no BD ao add no carrinho pra cobrança de compra) - local storage / cookies??
contatar user se carrinho pendente por um tempo(envio de email/sms/whats se prod parado no carrinho por x tempo)

4ª ETAPA - PRODUTOS
API de informações de produtos(scrapping/pronta?)
API de busca (busca registro de produtos do BD retorna tudo e faz filtro no front?)
API de recomendação de prod destaque/similares (retorno do BD)
Comparação entre produtos (quando abrir produto traz junto do BD lista de prod similares)(comparação feita no front)
contatar user interessados em produto que baixou preço(envio de email/sms/whats se prod no carrinho ou marcado como interessado baixou preço)
pontuação do produto (registro/retorno no BD mediante votação de user)

5ª ETAPA - COMENTÁRIOS/SOCIAL
registro de comentários(envio ao BD / retorna na pág do prod)
perguntas/respostas no produto (envio e retorno do BD)
API de aprovação social (scrapp das redes sociais sobre o produto e retorna ao front)

6ª ETAPA - PAGAMENTOS
formas de pagamento (API de pagamento pronta?)
API antifraude(compras no crédito-pesquisar)

7ª ETAPA - PROPAGANDAS
propaganda? frontend?
API de personalização (retorna itens já buscados pelo user em outros sites)
