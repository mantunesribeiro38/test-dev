# :dart: Teste Técnico para a vaga de Desenvolvedor

![Image description](https://github.com/mantunesribeiro38/test-dev/blob/master/my-food.png)

## Desafio

O objetivo deste desafio é criar uma aplicação que apresente o cardápio de uma lanchonete e permita ao cliente fazer um pedido.
    
Ao entrar, o usuário deverá visualizar as categorias de produtos e, ao clicar em uma categoria, deverá visualizar os produtos dessa categoria.

### Pré-Requitos  

<ul>
    <li>ao acessar a aplicação deve mostrar a lista de categorias</li>
    <li>ao acessar a categoria deve mostrar a lista de produtos</li>
    <li>o valor do produto deve estar formatado com duas casas após a vírgula</li>
    <li>deve ser possível adicionar produtos à um pedido</li>
    <li>
    esse pedido pode ser um modal ou tela mostrando o que o usuário escolheu, a quantidade e o valor total daquele produto
    </li>
    <li>o pedido deve mostrar também o valor total do pedido</li>
    <li>deve ser possível alterar as quantidades no pedido</li>
    <li>deve ser possível remover um item do pedido</li>
    <li>deve ser possível navegar de volta para a tela de categorias</li>
    <li>
    deve ser possível finalizar o pedido (um botão que limpa a tela e mostra uma mensagem de pedido enviado com sucesso)
    </li>
</ul>

Para listar as categorias e buscar os produtos, utilize os 2 webservices (REST) abaixo:

### Listagem de categorias

Segue abaixo as informações da rota de categorias.

<table>
    <tr>
        <th>
          Método da rota
        </th>
        <th>
            Nome da rota
        </th>
         <th>
           Parâmetros (Request Body)
        </th>
         <th>
          Retorno
        </th>
    </tr>
    <tr> 
        <td>
            GET
        </td>
        <td>
            /api/categories
        </td>
        <td>
        </td>
        <td>
            <pre>
                { "id": 1,  nome": "Hambúrguer" }
            </pre>
        </td>
    </tr>
</table>

### Listagem de produtos por categoria

Segue abaixo as informações da rota de produtos.
<table>
    <tr>
        <th>
          Método da rota
        </th>
        <th>
            Nome da rota
        </th>
         <th>
           Parâmetros (Request Body)
        </th>
         <th>
          Retorno
        </th>
    </tr>
    <tr> 
        <td>
            POST
        </td>
        <td>
            /api/products
        </td>
        <td>
            <pre>
                { "category": 1 }
            </pre>
        </td>
        <td>
           <pre>
               {
                    "id": 1,
                    nome": "Hambúrguer",
                    "descricao": "Pão, hambúrguer 90g",
                    "preco": 8.5,
                    "categoria_id": 1
                }
           </pre>
        </td>
    </tr>
</table>

### Diferenciais

<ul>
    <li>Design</li>
    <li>Responsividade</li>
    <li>Disponibilizar a solução na nuvem</li>

</ul>

## Instalação

**Clone o repositório**

```
git clone https://github.com/mantunesribeiro38/test-dev.git

cd test-dev
```
**Instalando dependências**

```
npm install

```

## Comandos úteis

**Inicializar o JSON Server**

```
json-server db.json
```

**Executar aplicação**

```
ng serve
```

## Observação

A API utilizada no teste  é exclusiva para aplicação do desafio, logo deve ser descontinuada em breve. Por causa disso a aplicação está configurada com  o JSON Server para simular a API Fake. 

##  Contribuição

Para contribuir basta criar uma issue para discurtimos o que você gostaria de mudar.

E se você tiver alguma dúvida sobre o projeto...

Email: mantunesribeiro38@gmail.com

[Meu Linkedin](https://www.linkedin.com/in/mateus-antunes-ribeiro-716b50166m)

Obrigado! :v:	

