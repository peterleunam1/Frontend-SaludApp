const saveName = (nombreCompleto: String) => {
    let nombres: String = '';
    let apellido1: String = '';
    let apellido2: String = '';

    nombreCompleto = nombreCompleto.toLowerCase();
    let nombreCompletoSplitted = nombreCompleto.split(" ");
    let safe: String[] = [];

    if (nombreCompletoSplitted.length > 4) {
        nombreCompletoSplitted.forEach((word: String, index: number) => {
            let wordSafe = word;
            if (word === 'del' || word === 'de') {
                wordSafe = `${word} ${nombreCompletoSplitted[index + 1]}`
                nombreCompletoSplitted.splice(index + 1, 1)
            }
            safe.push(wordSafe);
        });
    }
    else {
        safe = nombreCompletoSplitted;
    }

    if (safe.length >= 4) {
        nombres = `${safe[0]} ${safe[1]}`;
        apellido1 = safe[2];
        apellido2 = safe[3];
    }
    else {
        nombres = safe[0];
        apellido1 = safe[1];
        apellido2 = safe[2];
    }
    return { nombres, apellido1, apellido2 };
}

export {
    saveName
}