/**
 * Receitas de Natal Portuguesas
 * JavaScript para funcionalidades interativas
 */

/**
 * Função para mostrar/esconder ingredientes
 */
function toggleIngredients(id) {
    const element = document.getElementById(id);
    const button = document.querySelector('.toggle-btn');
    const text = button ? button.querySelector('.toggle-text') : null;
    const icon = button ? button.querySelector('.toggle-icon') : null;
    
    if (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
            button?.classList.add('active');
            if (text) text.textContent = 'Ocultar ingredientes';
            if (icon) icon.textContent = '−';
        } else {
            element.style.display = 'none';
            button?.classList.remove('active');
            if (text) text.textContent = 'Mostrar ingredientes';
            if (icon) icon.textContent = '+';
        }
    }
}

/**
 * Inicialização quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    // Log festivo
    console.log('%c🎄 Feliz Natal! 🎄', 'font-size: 24px; color: #2d5a27; font-weight: bold;');
});