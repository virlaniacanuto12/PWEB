async function exibirDadosGenericos(url, elementoId) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erro: ${res.status}`);

        const dados = await res.json();
        const elemento = document.getElementById(elementoId);

        // Monta o HTML para exibição no mesmo formato das cervejas
        const itensHtml = dados.map(({ name, alcohol, ibu, blg, style }) => {
            return `<div>${name || "N/A"} -- ${alcohol || "N/A"} -- ${ibu || "N/A"} -- ${blg || "N/A"} -- ${style || "N/A"}</div>`;
        });

        elemento.innerHTML = itensHtml.join("\n");
    } catch (err) {
        console.error("Erro ao carregar dados:", err);
        document.getElementById(elementoId).innerHTML =
            "<div style='color:red;'>Erro ao carregar os dados</div>";
    }
}

