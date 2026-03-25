# IoT Industrial - Monitor de Sensores em Tempo Real

Protótipo de um **Dashboard** desenvolvido em React Native para supervisão de linhas de montagem industriais. O aplicativo simula o processo de conexão com uma rede industrial e renderiza dados de telemetria de múltiplos sensores de forma performática.

## Requisitos Implementados

* **Gerenciamento de Estado:** Uso de `useState` e `useEffect` para controlar o ciclo de vida da aplicação e simular o carregamento de dados em tempo real.
* **Feedback Visual:** Implementação de `ActivityIndicator` centralizado para indicar o status de conexão ao sistema IoT durante os primeiros 3 segundos de execução.
* **Componentes de Lista:** `FlatList`: Otimizada para renderização de 15 sensores fictícios com identificação única e valores dinâmicos (Temperatura/Pressão) e `ScrollView` horizontal, utilizado no topo para exibição de informações fixas de status da unidade fabril.
* **Segurança e Layout:** Uso de `SafeAreaProvider` e `SafeAreaView` para garantir que a interface seja visível e não sofra cortes em diferentes modelos de dispositivos (notches e barras de sistema).
* **Estilização:** Layout moderno utilizando sistema de cards, sombras (`elevation`) e separação visual clara entre nome do sensor e seu respectivo valor.

## Tecnologias Utilizadas

* **Core:** React Native
* **Navegação de Área Segura:** `react-native-safe-area-context`
* **Linguagem:** JavaScript (ES6+)
* **Ambiente:** Expo

## Como Executar o Projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/FelipeAugust0/sensor-dashboard.git

2. **Entre na pasta do projeto:**
   ```bash
   cd sensor-dashboard
  
3. Instale as dependências:
   ```bash
   npm install
   
4. Instale a biblioteca de Safe Area:

   ```bash
    npm install react-native-safe-area-context
   
5. Inicie o projeto com Expo:

   ```bash
    npx start


****Desenvolvido por Felipe Augusto da Silva
