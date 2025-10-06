# 🧩 Objetivo Geral

Criar um ambiente com **Nginx**, **Node.js** e **MySQL** usando **Docker Compose**, onde:

* O **Nginx** faz o papel de **proxy reverso**, redirecionando requisições para a aplicação **Node.js**.
* A aplicação **Node.js** registra um **nome** na tabela `people` do **MySQL** e retorna:

  ```html
  <h1>Full Cycle Rocks!</h1>
  ```

  seguido da **lista de nomes cadastrados** no banco.

## ⚙️ **Passos Principais**

1. **Banco de Dados (MySQL)**

   * Criar um container MySQL.
   * Criar um banco (ex: `nodedb`) e uma tabela `people` com uma coluna `name`.

2. **Aplicação Node.js**

   * Conectar ao MySQL.
   * Ao receber uma requisição HTTP, inserir um novo nome na tabela `people`.
   * Consultar e listar todos os nomes cadastrados.
   * Retornar:

     ```html
     <h1>Full Cycle Rocks!</h1>
     ```

     Com a lista de nomes.

3. **Servidor Nginx**

   * Configurar como **proxy reverso**, redirecionando o tráfego da porta **8080** para o container da aplicação Node.js.

4. **Docker Compose**

   * Criar um arquivo `docker-compose.yml` com os serviços:

     * **nginx**
     * **node**
     * **mysql**
   * Configurar:

     * **Porta exposta:** `8080`
     * **Volume** no serviço Node.js para facilitar o desenvolvimento (ex: `./app:/usr/src/app`)
     * Dependências (`depends_on`) entre os containers.

5. **Execução**

   * Ao rodar:

     ```bash
     docker-compose up -d
     ```

     tudo deve subir automaticamente e estar acessível em:

     ```
     http://localhost:8080
     ```