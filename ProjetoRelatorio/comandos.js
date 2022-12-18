var atendimento = window.document.querySelector('input#Atendimento');
var convenio = window.document.querySelector('select#Convenio');
var datainicio = window.document.querySelector('input#dataInicio');
var dataAlta = window.document.querySelector('input#dataAlta');
var paciente = window.document.querySelector('input#Paciente');
var observacao = window.document.querySelector('input#Obs');
var usuario = window.document.querySelector('select#Usario');


const botaoSalvar = window.document.querySelector('input#BotaoSalvar');
const BotaoVLimparTudo = window.document.querySelector('input#LimparTudo');
const BotaoBaixarPlanilha = window.document.querySelector('input#BotaoBaixarPlanilha');
const BotaoLimparPlanilha = window.document.querySelector('input#LimparPlanilha').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja apagar todos os dados salvos?')){
        localStorage.clear();
     }else{
        alert("Limpeza cancelada.")
                                                                //Botão limpa os dados armazenados no LocalStorage
}
});

var informar = window.document.querySelector('div#msg');
botaoSalvar.addEventListener('click', () =>{
    informar.innerHTML='Dados Salvos com Sucesso!'
    informar.style.color = 'red';
});


                                                                //Armazenando dados no LocalStorage

function armazenandoEmLocalStorage(){
    var dados = JSON.parse(localStorage.getItem('dadosInseridos'));

    if (dados == null){
        localStorage.setItem('dadosInseridos', '[]');
        dados = [];
    }

    var pegandoValores = {
        atendimento: atendimento.value,
        convenio: convenio.value,
        datainicio: datainicio.value,
        dataAlta: dataAlta.value,
        paciente: paciente.value,
        observacao: observacao.value

    }

    dados.push(pegandoValores);

    localStorage.setItem('dadosInseridos', JSON.stringify(dados));
    alert('Registro incluido com sucesso')
    location.reload()                                               //Após salvar, ele limpa a tela automaticamente.

}


                                                                    //Código de criação da planilha e Botão Baixar Planilha


const dowloadXLSX = () => {
    const wb = XLSX.utils.book_new();

    wb.Props ={
        Title: "Relatório Contas Protocoladas",
        Subjects: "Contas Protocoladas",
        Author: usuario.value,
        CreatedDate: new Date(),
    }

    wb.SheetNames.push("Relatório Contas Protocoladas");

    const dados = [
        ['Atendimento', 'Convênio', 'Data Internação', 'Data Alta', 'Paciente', 'Obs'],
        [atendimento.value, convenio.value, datainicio.value, dataAlta.value, paciente.value, observacao.value]
        
    ];

    const ws = XLSX.utils.aoa_to_sheet(dados);

    wb.Sheets["Relatório Contas Protocoladas"] = ws;

    XLSX.writeFile(wb, 'Relatório Contas Protocoladas.xlsx', { bookType: 'xlsx', type: 'bynary'});
};

document.getElementById('BotaoBaixarPlanilha').addEventListener('click', () => {
    dowloadXLSX();

})

                                                                            //Botão recarregar a tela.
BotaoVLimparTudo.addEventListener('click', () =>{
    location.reload()
});

                                                                            //Limpar a planilha


function testeStoreage(){
    var botaoStoreage = localStorage.getItem(localStorage.key(0));
    var msg2 = window.document.getElementById('msg2');
    
}


