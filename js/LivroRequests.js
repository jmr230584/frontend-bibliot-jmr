// js/livroRequests.js
class LivroRequests {
  constructor() {
    this.serverUrl = 'https://biblioteca-digital-trsh.onrender.com';
    this.routeListarLivros = '/lista/livros';
  }

  async listarLivros() {
    const url = `${this.serverUrl}${this.routeListarLivros}`;
    console.log('Requisição para:', url);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Erro ${response.status}`);
      const livros = await response.json();
      console.log('Livros recebidos:', livros);
      return livros;
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      throw error;
    }
  }
}
