describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2: Verifica item na página', () => {
        // Verifica se existe o livro desejado
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })    
    it('Teste 3: Calcula Frete', () => {    
        // Calcula o frete
        cy.get('[data-id=3]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click().then
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')
  
        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })
    it('Teste4: Realiza uma compra', () => {
      // Localiza e clica no botão "Comprar"
      cy.contains('Comprar').click()
  
      // Aguarda até que o pop-up seja exibido
      cy.wait(5000)
  
      // Verifica se a mensagem de sucesso está presente no pop-up
      // cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')
      cy.contains('Sua compra foi realizada com sucesso').should('be.visible')
  
      // Fecha o pop-up clicando em seu botão
      // cy.get('.popup .fechar').click()
      cy.get('.swal-button').click()
    })
  })