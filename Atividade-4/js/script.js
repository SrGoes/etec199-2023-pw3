var tEvento = document.getElementById("evento");
var descEvento = document.getElementById("descEvento");
var boxExemplo = document.getElementById("boxExemplo");

function selecionaEvento(evento){
    if(evento == "onClick"){
        tEvento.innerHTML = "onClick";
        descEvento.innerHTML = "O evento OnClick é acionado quando um elemento é clicado com o botão do mouse ou tocado em dispositivos móveis. Ele é usado para executar uma ação quando o usuário clica em um botão, link ou qualquer outro elemento clicável. Por exemplo, ao clicar em um botão, o evento OnClick pode ser usado para enviar um formulário, abrir uma nova página, reproduzir um vídeo ou executar uma função JavaScript.";
        boxExemplo.innerHTML = '<button onclick="alert(\'Você clicou no botão!\')">Clique aqui</button>';
    }
    
    else if(evento == "dblClick"){
        tEvento.innerHTML = "dblClick";
        descEvento.innerHTML = "O evento dblClick (double click) é acionado quando um elemento é clicado duas vezes consecutivas com o botão esquerdo do mouse. É semelhante ao evento OnClick, mas requer que o usuário clique duas vezes para acioná-lo. Pode ser usado para executar ações específicas, como ampliar uma imagem ou mostrar informações adicionais sobre um item.";
        boxExemplo.innerHTML = '<button ondblclick="alert(\'Você clicou duas vezes no botão!\')">Clique aqui 2x</button>';
    }
    
    else if(evento == "onChange"){
        tEvento.innerHTML = "onChange";
        descEvento.innerHTML = "O evento onChange é acionado quando o valor de um elemento muda. É comumente usado em campos de formulário, como caixas de seleção, botões de opção ou campos de texto, para executar uma ação quando o usuário seleciona uma opção ou digita um novo valor. Por exemplo, ao selecionar uma opção em um menu suspenso, o evento onChange pode ser usado para atualizar o conteúdo de uma página ou executar uma função JavaScript.";
        boxExemplo.innerHTML = '<select onchange="alert(\'Você selecionou uma opção!\')"><option>Selecione uma opção</option><option>Opção 1</option><option>Opção 2</option><option>Opção 3</option></select>';
    }
    
    else if(evento == "input"){
        tEvento.innerHTML = "input";
        descEvento.innerHTML = "O evento input é acionado sempre que o valor de um elemento de entrada é alterado, incluindo quando um caractere é digitado em um campo de texto ou quando uma opção é selecionada em uma caixa de seleção. Ele é semelhante ao evento onChange, mas é acionado imediatamente após o usuário fazer uma alteração no elemento. Pode ser usado para validar entradas de formulário em tempo real ou atualizar o conteúdo de uma página à medida que o usuário digita.";
        boxExemplo.innerHTML = '<input type="text" placeholder="Digite alguma coisa" oninput="alert(\'Você digitou um caractere!\')">';
    }
    
    else if(evento == "onLoad"){
        tEvento.innerHTML = "onLoad";
        descEvento.innerHTML = "O evento onLoad é acionado quando uma página da Web ou um elemento é carregado completamente. Ele pode ser usado para executar ações específicas, como carregar conteúdo adicional, iniciar uma animação ou executar uma função JavaScript, após a página ter sido carregada.";
        boxExemplo.innerHTML = '<img src="img/imagen.png" onload="alert(\'A imagem foi carregada!\')">';

    }
    
    else if(evento == "onMouseOver"){
        tEvento.innerHTML = "onMouseOver";
        descEvento.innerHTML = "O evento onMouseOver é acionado quando o ponteiro do mouse é movido sobre um elemento. Ele é frequentemente usado para exibir informações adicionais sobre um item ou para destacar um elemento quando o usuário passa o mouse sobre ele.";
        boxExemplo.innerHTML = '<button onmouseover="alert(\'Você passou o mouse sobre o botão!\')">Passe o mouse aqui</button>';
    }
    
    else if(evento == "onMouseOut"){
        tEvento.innerHTML = "onMouseOut";
        descEvento.innerHTML = "O evento onMouseOut é acionado quando o ponteiro do mouse deixa um elemento. Ele é frequentemente usado para ocultar informações adicionais ou restaurar o estilo original do elemento quando o usuário move o mouse para fora dele.";
        boxExemplo.innerHTML = '<button onmouseout="alert(\'Você tirou o mouse do botão!\')">Coloque o Mouse encima e tire</button>';
    }
    
    else if(evento == "onKeyDown"){
        tEvento.innerHTML = "onKeyDown";
        descEvento.innerHTML = "O evento onKeyDown é acionado quando uma tecla é pressionada e mantida pressionada. Ele é usado para capturar entradas de teclado e pode ser usado para executar ações específicas, como navegar por um menu, rolar uma página ou executar uma função JavaScript.";
        boxExemplo.innerHTML = '<input type="text" placeholder="Aperte alguma tecla com o campo focado" onkeydown="alert(\'Você pressionou uma tecla!\')">';

    }
    
    else if(evento == "onKeyUp"){
        tEvento.innerHTML = "onKeyUp";
        descEvento.innerHTML = "O evento onKeyUp é acionado quando uma tecla é liberada após ter sido pressionada. Ele é usado para capturar entradas de teclado e pode ser usado para executar ações específicas, como enviar um formulário ou executar uma função JavaScript.";
        boxExemplo.innerHTML = '<input type="text" placeholder="Aperte alguma tecla e solte com o campo focado" onkeyup="alert(\'Você soltou uma tecla!\')">';

    }
    
    else if(evento == "onFocus"){
        tEvento.innerHTML = "onFocus";
        descEvento.innerHTML = "O evento onFocus é acionado quando um elemento recebe o foco. Ele é frequentemente usado em campos de formulário para validar entradas ou para fornecer feedback visual para o usuário. Por exemplo, ao clicar em um campo de entrada de texto, o evento onFocus pode ser usado para realçar o campo ou exibir um prompt de ajuda para o usuário.";
        boxExemplo.innerHTML = '<input type="text" placeholder="Clique no campo" onfocus="alert(\'Você clicou no campo de texto!\')">';

    }

}