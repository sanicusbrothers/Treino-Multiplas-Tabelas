const URL =  'sua_url'
const KEY =  'sua_key'
const local = `${URL}/rest/v1`

const HEADERS = {
    'apikey': KEY,
    'Authorization': `Bearer ${KEY}`,
    'Content-Type': 'application/json'
  };


  async function novaEntrega( motorista_id, veiculo_id, status, destino){
    try{
        const res = await fetch(`${local}/entregas`, {
            method: 'POST',
            headers: { ...HEADERS, 'Prefer': 'return=representation' },
            body: JSON.stringify({motorista_id: motorista_id, veiculo_id: veiculo_id, status: status, destino: destino})
        })
        const data = await res.json()
        console.log('entrega criada com sucesso:', data);
    } catch(err){
        console.log('Erro ao criar', err);
    }}

    async function novoMotorista(nome, cnh){
        try{
            const res = await fetch(`${local}/motoristas`, {
                method: 'POST',
                headers: { ...HEADERS, 'Prefer': 'return=representation' },
                body: JSON.stringify({nome: nome, cnh: cnh} )
            })
            const data = await res.json()
            console.log('entrega criada com sucesso:', data);
        } catch(err){
            console.log('Erro ao criar', err);
        }}

        async function novoVeiculo(placa, modelo){
            try{
                const res = await fetch(`${local}/veiculos`, {
                    method: 'POST',
                    headers: { ...HEADERS, 'Prefer': 'return=representation' },
                    body: JSON.stringify({placa: placa, modelo: modelo} )
                })
                const data = await res.json()
                console.log('entrega criada com sucesso:', data);
            } catch(err){
                console.log('Erro ao criar', err);
            }}

            async function atualizarEntrega(ident, motorista_id, veiculo_id, status, destino){
                try{
                    const res = await fetch(`${local}/entregas?id=eq.${ident}`, {
                         method: 'PATCH',
                         headers: { ...HEADERS, 'Prefer': 'return=representation' },
                         body: JSON.stringify({motorista_id: motorista_id, veiculo_id: veiculo_id, status: status, destino: destino})
                        })
                        const data = await res.json()
                        console.log('entrega atualizada com sucesso:', data);
                    } catch(err){
                        console.log('Erro ao atualizar', err);
                    }}
                    async function deletarEntrega(id){
                        try{
                            const res = await fetch(`${local}/entregas?id=eq.${id}`, {
                                method: 'DELETE',
                                headers: { ...HEADERS, 'Prefer': 'return=representation'}
                            })
                                const data = await res.json()
                                console.log('entrega apagada com sucesso:', data);
                            } catch(err){
                                console.log('Erro ao atualizar', err);
                            }}
                    async function PorId(table, id){
                        try {
                            const res = await fetch(`${local}/${table}?id=eq.${id}`, {headers: HEADERS})
                            const lista = await res.json()
                    
                            console.log('Dados', lista)
                    
                        } catch(err){
                            console.error('Erro ao puxar os dados', err)
                        }}





            //novoVeiculo('67nBg6', 'Monster')

            //novoMotorista('Patricio', '27592389903')

            //novaEntrega(1, 1, 'pendente', 'Parana')

            //atualizarEntrega(1, 1, 1, 'em rota', 'Paraiba')
            
            //PorId('motoristas', 2)

            //deletarEntrega(1)


