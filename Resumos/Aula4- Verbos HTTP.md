# Alura Back-End

## Verbos HTTP: A Linguagem das Requisições Web

Os verbos HTTP, também conhecidos como métodos HTTP, são como comandos que um cliente (como um navegdaor ou uma aplicação) utilizada para se comunicar com um servidor web. Cada verbo indica uma ação específica que se deseja realizar sobre um recuro localizado no servidor.

#### Por que são importantes?

- Padronizam a comunicação: Garantem que cliente e servidores entendam as mesmas açoes.
- Definem a semântica das requisições: Clarificam o propósito de cada solicitação.
- Facilitam a construção de APIs RESTful: São fundamentais para a arquitetura REST, que organiza a web em recursos e ações sobre esses recursos.

#### Principais Verbos HTTP e suas Funcionalidades:

- GET:
    - Obter um recurso
    - É o método mais comum e seguri.
    - Não deve causar alterações no servidor.
- POST:
    - Submeter dados para criar um novo recurso
    - Utilizado para enviar formulários, fazer uploads de arquivos e realizar outras ações que modificam o estado do servidor.
- PUT:
    - Substituir um recurso existente por um novo.
    - Atualiza completamente um recurso.
- DELETE:
    - Deletar um recurso
    - Remove um recurso específico.
- PATCH:
    - Aplicar modificações parciais em um recurso 
    - Atualiza apenas partes específicas de um recurso
- HEAD:
    - Similar ao GET, mas retorna apenas os cabeçalhos da resposta, sem o corpo.
    - Utilizado para obter informações sobre um recurso sem baixar todo conteúdo
- OPTIONS:
    - Retorna os métodos HTTP permitidos para um recurso específico.
    - Utilizado para descobrir as capacidades de um servidor

#### Em resumo:
Os verbos HTTP são fundamentais para a comunicação entre clientes e servidores na web. Ao entender seu significado e utilização, você estará apto a construir aplicações web mais robustas e eficientes. 