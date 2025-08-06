# Extrator de Números de Telefone via JavaScript

Este projeto contém um script simples em JavaScript que extrai números de telefone com DDI +55 (Brasil) de grupos do WhatsApp Web, buscando esses números em elementos <span> com atributo title na página HTML.

## 🔧 Como funciona

- O script busca por todos os elementos `span[title]` no DOM da página atual.
- Usa uma expressão regular para localizar números com o padrão `55 XX XXXX-XXXX` ou `55 XX XXXXX-XXXX`.
- Limpa os caracteres não numéricos.
- Gera um arquivo `.csv` com os números encontrados.
- Faz o download automático desse arquivo.

## 🚀 Como usar

1. Copie o conteúdo de `script.js`.

2. Abra o navegador, acesse um grupo no WhatsApp Web, pressione **F12** para abrir as ferramentas de desenvolvedor e vá até a aba **Console**.

   - **Cole o código copiado diretamente no console.**
   - **Caso o navegador bloqueie a colagem do código, digite no console os seguintes comandos, pressionando `Enter` após cada um:**

     ```
     cls
     clear
     allow pasting
     ```

   - Em seguida, tente colar novamente o código.

3. O script será executado e o arquivo `numeros_telefone.csv` será baixado automaticamente com os números encontrados.


## 💡 Vantagem

Uma forma gratuita e sem programas de extrair números de grupos de WhatsApp.

