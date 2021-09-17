function createOptionsState() {
  const stateSelect = document.getElementById('form-state');
  const stateNames = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
  const state = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']
  for (let i = 0; i < stateNames.length; i += 1) {
    const optionSelect = document.createElement('option');
    optionSelect.innerText = stateNames[i];
    const optionAttr = document.createAttribute('value');
    optionAttr.value = state[i];
    optionSelect.setAttributeNode(optionAttr);
    stateSelect.appendChild(optionSelect);
  }
}

window.onload = function () {
  createOptionsState()
}
